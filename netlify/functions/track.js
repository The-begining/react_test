import { createClient } from '@supabase/supabase-js';
import isbot from 'isbot';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const headers = event.headers || {};
    const ua = headers['user-agent'] || '';
    const bot = isbot(ua);
    const { path = '/' } = JSON.parse(event.body || '{}');

    const { error } = await supabase.rpc('increment_page_view', { p_path: path, p_is_bot: bot });
    if (error) {
      console.error('supabase rpc error', error);
      return { statusCode: 500, body: 'Failed to track' };
    }
    return { statusCode: 202, body: 'ok' };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: 'Server error' };
  }
}


