// GLOBALS  -  NO WINDOW

// __dirname  -  path to current directory
// __filename  -  file name
// require  -  function to use modules (common JS)
// module  -  info about current module (file)
// process  -  info about the env where the program is being executed

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;