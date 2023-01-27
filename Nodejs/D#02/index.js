const http = require("http");
const { readFile, writeFile, readFileSync } = require("fs");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      //   const htmlContent = readFile("/index.html", (err, data) => {
      //     if (err) {
      //       return;
      //     }
      //     return data;
      //   });
      //   res.end(htmlContent);

      const htmlContent = fs.readFileSync("./index.html");
      res.end(htmlContent);
      break;

    case "/style":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");

      const cssContent = fs.readFileSync("./style.css");
      res.end(cssContent);
      break;

    case "/image":
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpg");

      const image = fs.readFileSync("./1.jpg");
      res.end(image);
      break;

    case "/favicon":
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");
      const iconContent = fs.readFileSync("./favicon-16x16.png");
      res.end(iconContent);
      break;

    case "/video":
      res.statusCode = 200;
      res.setHeader("Content-Type", "video/mp4");
      const videoContent = fs.readFileSync("./horse.mp4");
      res.end(videoContent);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("page Not found");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
