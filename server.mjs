import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.pdf': 'application/pdf' };

http.createServer((req, res) => {
  const requestPath = decodeURIComponent(req.url === '/' ? '/index.html' : req.url.split('?')[0]);
  const filePath = path.join(root, requestPath);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
}).listen(4173, '127.0.0.1', () => console.log('Portfolio running at http://127.0.0.1:4173'));
