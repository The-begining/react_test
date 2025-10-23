import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, MEDIA_BUCKET = 'media', DOCUMENTS_BUCKET = 'documents' } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

function parsePath(path) {
  // Expected: /api/media/:bucket/:key
  const parts = path.split('/').filter(Boolean);
  const bucket = parts[2];
  const key = decodeURIComponent(parts.slice(3).join('/'));
  return { bucket, key };
}

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { bucket, key } = parsePath(event.path);
    if (!bucket || !key) return { statusCode: 400, body: 'Bad request' };

    // enforce only allowed buckets
    if (![MEDIA_BUCKET, DOCUMENTS_BUCKET].includes(bucket)) {
      return { statusCode: 403, body: 'Forbidden' };
    }

    // create a short-lived signed URL then fetch bytes server-side
    const { data: signed, error: signErr } = await supabase.storage.from(bucket).createSignedUrl(key, 60);
    if (signErr || !signed?.signedUrl) {
      console.error('signed url error', signErr);
      return { statusCode: 404, body: 'Not found' };
    }

    const res = await fetch(signed.signedUrl);
    if (!res.ok) return { statusCode: res.status, body: 'Upstream error' };
    const contentType = res.headers.get('content-type') || 'application/octet-stream';
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noai, noimageai, noimageindex, noarchive'
      },
      body: base64
    };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: 'Server error' };
  }
}


