/**
 * Netlify Function: proxy
 *
 * Fetches a remote URL server-side and strips X-Frame-Options /
 * Content-Security-Policy frame-ancestors headers so the page can be
 * rendered inside an iframe on the Breakpoint Tester tool.
 *
 * Usage: /api/proxy?url=https://example.com
 */

// Headers we must never forward to the client – they would break embedding
const STRIP_RESPONSE_HEADERS = new Set([
  'x-frame-options',
  'content-security-policy',
  'content-security-policy-report-only',
]);

// Headers we must not forward in the outbound request to the target
const STRIP_REQUEST_HEADERS = new Set([
  'host',
  'connection',
  'transfer-encoding',
  'te',
  'upgrade',
  'proxy-authorization',
  'proxy-authenticate',
  'trailer',
]);

export const handler = async (event) => {
  // Only allow GET / HEAD
  if (event.httpMethod !== 'GET' && event.httpMethod !== 'HEAD') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const targetUrl = event.queryStringParameters?.url;

  if (!targetUrl) {
    return { statusCode: 400, body: 'Missing required parameter: url' };
  }

  // Validate and normalise
  let parsed;
  try {
    parsed = new URL(targetUrl);
  } catch {
    return { statusCode: 400, body: 'Invalid URL' };
  }

  // Only proxy HTTP(S) – no file://, data: etc.
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { statusCode: 400, body: 'Only http and https URLs are supported' };
  }

  const origin = `${parsed.protocol}//${parsed.host}`;

  try {
    const response = await fetch(targetUrl, {
      method: event.httpMethod,
      redirect: 'follow',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      // Signal timeout: abort after 15 s
      signal: AbortSignal.timeout(15_000),
    });

    const contentType = response.headers.get('content-type') ?? 'text/html; charset=utf-8';
    const isHtml = contentType.includes('text/html');

    // Build safe response headers
    const responseHeaders = { 'Content-Type': contentType };
    for (const [key, value] of response.headers.entries()) {
      const lower = key.toLowerCase();
      if (!STRIP_RESPONSE_HEADERS.has(lower) && !STRIP_REQUEST_HEADERS.has(lower)) {
        responseHeaders[key] = value;
      }
    }

    if (isHtml) {
      let html = await response.text();

      // Inject <base> so relative URLs resolve against the original origin.
      // Insert after <head> (case-insensitive). If no <head>, prepend.
      const baseTag = `<base href="${origin}${parsed.pathname === '/' ? '/' : parsed.pathname.replace(/[^/]*$/, '')}">`;
      if (!/<base[\s>]/i.test(html)) {
        if (/<head[\s>]/i.test(html)) {
          html = html.replace(/(<head[^>]*>)/i, `$1${baseTag}`);
        } else {
          html = baseTag + html;
        }
      }

      return {
        statusCode: response.status,
        headers: responseHeaders,
        body: html,
      };
    }

    // For non-HTML responses return as base64 binary
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return {
      statusCode: response.status,
      headers: responseHeaders,
      body: base64,
      isBase64Encoded: true,
    };
  } catch (err) {
    const timedOut = err.name === 'TimeoutError' || err.name === 'AbortError';
    return {
      statusCode: timedOut ? 504 : 502,
      body: timedOut ? 'Proxy timeout: the target server took too long to respond.' : `Proxy error: ${err.message}`,
    };
  }
};
