const {Client} = require('pg');

const client = new Client(
    {host:'localhost', user:'decagon', password:'', database:'express'}
    );

client.connect()

module.exports = client;
