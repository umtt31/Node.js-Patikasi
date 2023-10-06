const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server baslatildi");

  let url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>index</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>about</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>contact</h2>");
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>not found</h2>");
  }
});

server.listen(3000, () => {
  console.log("server listining on port 5000");
});
