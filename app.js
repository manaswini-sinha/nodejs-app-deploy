const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🚀 Node.js App deployed via Jenkins CI/CD pipeline!');
});

server.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
