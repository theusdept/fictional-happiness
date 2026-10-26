import { createServer } from 'node:http';

const port = Number(process.env.PORT || 3000);
const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok', service: 'clearmargin', mode: 'setup' }));
    return;
  }
  res.writeHead(503);
  res.end(JSON.stringify({ status: 'not_ready', message: 'ClearMargin production setup is in progress. Customer data and billing are disabled.' }));
});
server.listen(port, '0.0.0.0');
