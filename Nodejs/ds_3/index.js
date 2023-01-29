const express = require("express");
const { readFile, writeFile } = require("fs").promises;
const app = express();
const port = 3000;

app.use(express.json());
app.post("/register", (req, res) => {
  // console.log(req.body[0]);
  let data = req.body;
  let attr = "";
  console.log(data);
  data.forEach((element) => {
    if (element.username && element.firstName && element.password) {
      (async () => {
        await writeFile("db.json", JSON.stringify(req.body, null, 4), {
          flag: "a",
        });
      })();
      res.send("{message:”user was registered successfully”}");
    } else if (
      element.username == null ||
      element.username == undefined ||
      element.username == ""
    ) {
      attr = "username";
    } else if (
      element.firstName == null ||
      element.firstName == undefined ||
      element.firstName == ""
    ) {
      attr = "firstName";
    } else if (
      element.password == null ||
      element.password == undefined ||
      element.password == ""
    ) {
      attr = "password";
    } else {
      attr = "123";
    }
    res.send(`{error:{${attr}} is required`);
  });

  // console.log(req);
});

app.post("/login", (req, res) => {
  let data = req.body;
  let attr = "";
  data.forEach((element) => {
    if (element.username && element.password) {
      (async () => {
        let dbStr = await readFile("db.json", "utf8");
        let db = JSON.parse(dbStr);
        let login = db.filter((ele) => {
          if (ele.username === element.username) {
            console.log("loggedin");
            return true;
          } else {
            return false;
          }
        });

        if (login.length > 0) {
          res.send({
            message: "logged in successfully",
            profile: { name: element.username, firstName: element.firstName },
          });
        } else {
          res.statusCode = 401;
          res.send({ error: "invalid credentials" });
        }
      })();
    } else if (
      element.username == null ||
      element.username == undefined ||
      element.username == ""
    ) {
      attr = "username";
      res.send(`{error:{${attr}} is required`);
    } else if (
      element.password == null ||
      element.password == undefined ||
      element.password == ""
    ) {
      attr = "password";
      res.send(`{error:{${attr}} is required`);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
