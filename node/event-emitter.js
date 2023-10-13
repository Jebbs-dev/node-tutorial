const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
  console.log(`Data received: user ${name} with id:${id}`)
})

customEmitter.emit('response', 'John', 32)
