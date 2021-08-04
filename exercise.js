const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('log', (e)=>{
  console.log(e.message.toUpperCase());
});


emitter.emit('log', 
    {message:'this is the message you must log'}
);