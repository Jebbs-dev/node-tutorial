const os = require('os');

// const uptime = os.uptime()
// console.log(`The system has been running for ${uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
}
console.log(currentOS)