/**
 * Local dev server for Risk Guardian.
 * Serves the HTML and proxies Analyze requests to Anthropic so the browser
 * doesn't hit CORS and the API key stays server-side.
 *
 * Usage:
 *   export ANTHROPIC_API_KEY=your_key_here
 *   node server.js
 * Then open http://localhost:3456
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const HTML_PATH = path.join(__dirname, 'risk-guardian-architectural.html');

function serveFile(res, statusCode, contentType, body) {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(body);
}

function serveHtml(res) {
  fs.readFile(HTML_PATH, (err, data) => {
    if (err) {
      serveFile(res, 500, 'text/plain', 'Could not read risk-guardian-architectural.html');
      return;
    }
    serveFile(res, 200, 'text/html', data);
  });
}

async function proxyAnalyze(req, res) {
  if (req.method !== 'POST') {
    serveFile(res, 405, 'text/plain', 'Method not allowed');
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    serveFile(res, 500, 'application/json', JSON.stringify({
      error: 'ANTHROPIC_API_KEY is not set. Run: export ANTHROPIC_API_KEY=your_key'
    }));
    return;
  }

  let body = '';
  for await (const chunk of req) body += chunk;
  let payload;
  try {
    payload = JSON.parse(body);
  } catch {
    serveFile(res, 400, 'application/json', JSON.stringify({ error: 'Invalid JSON body' }));
    return;
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.text();
  res.writeHead(response.status, { 'Content-Type': 'application/json' });
  res.end(data);
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/analyze' && req.method === 'POST') {
    proxyAnalyze(req, res);
    return;
  }
  if (req.url === '/' || req.url === '/index.html' || req.url === '') {
    serveHtml(res);
    return;
  }
  serveFile(res, 404, 'text/plain', 'Not found');
});

server.listen(PORT, () => {
  console.log(`Risk Guardian: http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('Warn: ANTHROPIC_API_KEY not set. Execute Analysis will fail until you set it.');
  }
});
