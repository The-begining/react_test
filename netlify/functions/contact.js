import { createClient } from '@supabase/supabase-js';
import crypto from 'node:crypto';
import isbot from 'isbot';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, IP_HASH_SALT } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

function hashIp(ip) {
  if (!ip) return null;
  const h = crypto.createHmac('sha256', IP_HASH_SALT || '');
  h.update(ip);
  return h.digest('hex');
}

function getIpFromHeaders(headers) {
  return headers['x-forwarded-for']?.split(',')[0]?.trim()
    || headers['client-ip']
    || headers['x-real-ip']
    || null;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const headers = event.headers || {};
    const ua = headers['user-agent'] || '';

    const body = JSON.parse(event.body || '{}');
    const { name = '', email = '', phone = '', message = '', source_path = '/', _hp = '', _ts } = body;

    // basic validation
    if (!message || (String(message).trim().length === 0)) {
      return { statusCode: 400, body: 'Message is required' };
    }

    // honeypot
    if (_hp) {
      return { statusCode: 202, body: 'ok' };
    }

    // time-to-submit (client should send timestamp at form render)
    let isFast = false;
    if (_ts) {
      const now = Date.now();
      const delta = now - Number(_ts);
      if (!Number.isNaN(delta) && delta < 2000) isFast = true;
    }

    const ip = getIpFromHeaders(headers);
    const ip_hash = hashIp(ip);
    const botUa = isbot(ua);
    const is_bot = Boolean(botUa || isFast);

    const { error } = await supabase.from('contacts').insert({
      name, email, phone, message, source_path, user_agent: ua, ip_hash, is_bot
    });
    if (error) {
      console.error('supabase insert error', error);
      return { statusCode: 500, body: 'Failed to save' };
    }

    return { statusCode: 202, body: 'ok' };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: 'Server error' };
  }
}


