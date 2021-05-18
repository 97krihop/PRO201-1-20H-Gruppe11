const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || '3000';
const app = express();

app.get('/', (req, res) => {
  res.send('test');
});

const server =
  fs.existsSync('server.key') && fs.existsSync('server.crt')
    ? https.createServer(
        {
          key: fs.readFileSync('server.key'),
          cert: fs.readFileSync('server.crt'),
        },
        app
      )
    : http.createServer(app);

server.listen(port, () => {
  console.log(
    `server started on https://localhost:${port} or https://webapps.kristiania.no:${port}`
  );
});
