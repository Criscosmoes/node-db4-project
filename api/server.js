const express = require('express'); 

// import router here 

const server = express();

server.use(express.json()); 

module.exports = server; 