// const {writeFileSync} = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `Hello World ${i}\n`, {flag : 'a'})

// }

const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 85000,
  encoding: "utf-8",
});

// Default size of 64kb
// last buffer - remainder
// highWaterMark - control the size

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
