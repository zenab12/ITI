const { readFile, writeFile } = require("fs").promises;
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static());
//global logger with time for requests and method
app.use(morgan("dev"));
//global error handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).res.send("internal server error");
  }
  next();
});

//register route with required validation
app.post("/register", (req, res) => {
  // console.log(req.body[0]);
  let data = req.body;
  let attr = "";
  console.log(data);
  data.forEach((element) => {
    if (element.username && element.firstName && element.password) {
      (async () => {
        await writeFile("db.json", JSON.stringify(req.body, null, 4));
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
    }
    res.send(`{error:{${attr}} is required`);
  });

  // console.log(req);
});


//login route with required validation

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
            ele.login = true;
            return ele;
          } else {
            ele.login = false;
            return ele;
          }
        });
        (async () => {
          await writeFile("db.json", JSON.stringify(login, null, 4));
        })();
        if (login.length > 0) {
          element.login = true;
          console.log(element);
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

//get todo route 

app.get("/todos", (req, res, next) => {
  (async () => {
    let page = await readFile("todos.json", "utf-8");
    res.end(page);
  })();
});

//add to do route based on login status and exist uersname

app.post("/todos", (req, res, next) => {
  (async () => {
    let dbStr = await readFile("db.json", "utf-8");
    let db = JSON.parse(dbStr);
    console.log(req.body.username);

    let loggedEle = db.filter((ele) => {
      if (ele.login && ele.username === req.body.username) {
        (async () => {
          const ctrStr = await readFile("counter.json", "utf-8");
          const ctr = JSON.parse(ctrStr);
          ctr.counter++;
          ele.title = req.body.title;
          ele.status = req.body.status ? req.body.status : "todo";
          (ele.id = ctr.counter),
            await writeFile("counter.json", JSON.stringify(ctr, null, 4));
        })();
        return `{"username":${ele.username},"title":${ele.title}}`;
      }
    });

    if (loggedEle.length > 0) {
      let todostr = await readFile("todos.json", "utf-8");
      let todos = JSON.parse(todostr);
      console.log(
        `{"username":${loggedEle[0].username},"title":${loggedEle[0].title}}`
      );
      todos.push({
        username: loggedEle[0].username,
        title: loggedEle[0].title,
        status: loggedEle[0].status,
        id: loggedEle[0].id,
      });

      await writeFile("todos.json", JSON.stringify(todos, null, 4));
      res.end("todo created successfully");
    } else {
      res.end(
        "error happened check you are loggedin again please or your username is exist"
      );
    }
  })();
});

//delete todo route based on id
app.delete("/todos/:id", (req, res, next) => {
  const { id } = req.params;
  (async () => {
    let taskstr = await readFile("todos.json", "utf-8");
    let tasks = JSON.parse(taskstr);
    console.log(tasks);
    let notRemovedTask = tasks.filter((task) => {
      return +id !== task.id;
    });
    await writeFile("todos.json", JSON.stringify(notRemovedTask, null, 4));
    res.end("successfully removed");
  })();
});

//edit todo route based on id

app.patch("/todos/:id", (req, res, next) => {
  const { id } = req.params;
  (async () => {
    let taskstr = await readFile("todos.json", "utf-8");
    let tasks = JSON.parse(taskstr);
    const { title, status } = req.body;
    let editTask = tasks.map((task) => {
      return +id === task.id
        ? {
            ...task,
            title,
            status,
          }
        : task;
    });
    res.send("updating suscess");
    await writeFile("todos.json", JSON.stringify(editTask, null, 4));
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
