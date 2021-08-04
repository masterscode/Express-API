const {Client} = require('pg');

const client = new Client(
    {host:'localhost', user:'decagon', password:'', database:'jumga_dev'}
    );

client.connect()
client.query('select * from users', (error, result)=>{
    console.log('error:',error);
    // console.log(result);

    const users = result.rows;
    console.log(users);
    client.end;
});

