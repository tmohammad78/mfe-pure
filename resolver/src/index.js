// src/index.js
const express = require('express');
const cors = require('cors');
const app = require('./app');

const server = express();

server.use(cors());
server.use('/api', app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
