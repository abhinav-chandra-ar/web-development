const http = require("http");

const server = http.createServer((req, res) => {

  const currentTime = new Date().toLocaleTimeString();

  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <h1>Current Time</h1>
    <h2>${currentTime}</h2>
  `);

  res.end();

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});