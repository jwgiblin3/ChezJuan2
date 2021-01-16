const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('./dist/cookiteer'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/cookiteer/'}
  );
  });

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));