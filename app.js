const http = require('http');
const {server} = require('./server');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5100;

server.set('port', PORT);
const ver = '/v1';

server.use((req,res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization ');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS'); 
  next();
});


server.use(ver + '/stuff', (req, res, next)=>{
  const stuff = [
    {
        _id:'23424k2jlk23l4l', 
        title:'the first stuff for sale', 
        description:'the first stuff for sale', 
        imageUrl:'', 
        price:90, 
        userId:34223
  },
    {
        _id:'23424k2jlk23l4l', 
        title:'the first stuff for sale', 
        description:'the first stuff for sale', 
        imageUrl:'', 
        price:90, 
        userId:34223
  },
];
  res.status(200);
  res.send(stuff);
  next();
});

server.post(ver + '/stuff', (req, res, next)=>{
  console.log(req.body);
  res.status(201).json({message:'stuff added successfully'});
});

const httpServer = http.createServer(server);
httpServer.listen(PORT);