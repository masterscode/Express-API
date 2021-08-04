const express = require('express');

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));


module.exports.server = server;

// server.use(bodyParser.json);
// server.use(bodyParser.urlencoded({extended:true})); 
/**
 * replaced with express.json()

*/