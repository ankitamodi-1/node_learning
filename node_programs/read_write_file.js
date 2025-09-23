
const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("read_write_file/home.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("read_write_file/about.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.write("<b>this is bold</b><br>");
      res.end("this is ebd");
    });
  } else if (req.url === "/create-file") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = "<br><br><h1>This is test file</h1>";
    for (let i = 0; i < 10; i++) {
//      fs.writeFile("read_write_file/test.html", data, (err) => {git
        fs.appendFile("read_write_file/test.html", data, (err) => {
        if (err) throw err;
      });
    }

    res.write("file is created");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("read_write_file/404.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);

// settimeout
