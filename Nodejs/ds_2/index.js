const http = require("http");
const { readFile, writeFile } = require("fs").promises;
const hostname = "127.0.0.1";
const port = 3000;
const log = console.log;

class advancedIncommingMessage extends http.IncomingMessage {
  constructor(...args) {
    super(...args);
    this.myProb = "this comming from advancedIncomming message class";
  }
}

const server = http.createServer(
  { IncomingMessage: advancedIncommingMessage },
  (req, res) => {
    log(req.method, req.url);
    // log(req.myProb);
    // log(req.rawHeaders);
    switch (req.url) {
      case "/":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        let home = async () => {
          let page = await readFile("index.html", "utf-8");
          res.end(page);
        };
        home();
        break;
      case "/Nature":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        let nature = async () => {
          let page = await readFile("nature.html", "utf-8");
          res.end(page);
        };
        nature();
        break;
      case "/Quotes":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        let quote = async () => {
          let page = await readFile("quotes.html", "utf-8");
          res.end(page);
        };
        quote();
        break;
      case "/favicon":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/x-icon");
        let favico = async () => {
          let favicon = await readFile("./images/favico.png");
          res.end(favicon);
        };
        favico();
        break;
      case "/script":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/script");
        let script = async () => {
          let scriptSrc = await readFile("script.js", "utf-8");
          res.end(scriptSrc);
        };
        script();
        break;
      case "/db":
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let db = async () => {
          let dbStr = await readFile("../ds_1/db.json", "utf-8");
          res.end(dbStr);
          log(dbStr);
        };
        db();
        break;

      case "/style":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        let cssContent = async () => {
          let cssFile = await readFile("style.css", "utf-8");
          res.end(cssFile);
        };
        cssContent();
        break;
      case "/image1":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpg");
        let image_1 = async () => {
          let img = await readFile("./images/Nature/1.jpg");
          res.end(img);
        };
        image_1();
        break;
      case "/image2":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        let image_2 = async () => {
          let img = await readFile("./images/Nature/2.jpg");
          res.end(img);
        };
        image_2();
        break;

      case "/quote1":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpg");
        let quote1 = async () => {
          let q = await readFile("./images/Quotes/Linus.jpg");
          res.end(q);
        };
        quote1();
        break;
      case "/quote2":
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpg");
        let quote2 = async () => {
          let q = await readFile("./images/Quotes/Think twice.jpg");
          res.end(q);
        };
        quote2();
        break;
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("page Not found");
        break;
    }
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
