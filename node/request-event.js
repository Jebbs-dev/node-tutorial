const http = require("http");

const server = http.createServer();
// Alternative way of creating server with the Event Emitter API

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5050);
