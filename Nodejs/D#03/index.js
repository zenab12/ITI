const path = require("path");
const fs = require("fs/promises");
const express = require("express");
const morgan = require("morgan");
const tasks = require("./tasks.json");
// const { stat } = require("fs");
const app = express();
const port = 3000;

const usersFilePath = path.join(__dirname, "tasks.json");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.static("assets"));

// //get default data
app.get("/", (req, res) => {
  res.status(200).send("Hello every body there are tasks you should do");
});

//api to create new todo inside todos.json
app.post("/tasks", async (req, res, next) => {
  const { title, status } = req.body;
  const newTask = {
    id: Date.now(),
    title,
    status,
  };
  tasks.push(newTask);
  await fs.writeFile(usersFilePath, JSON.stringify(tasks, null, 2));
  res.status(204).send();
  console.log(req.body);
});

//api to get all todos with filter for status
app.get("/tasks", (req, res) => {
  console.log("get tasj o");
  const { status, id } = req.query;
  if (status) {
    const result = !status
      ? tasks
      : tasks.filter((task) => task.status === `${status}`);
    res.status(200).send(result);
  } else {
    const { id } = req.query;
    const idRes = !id ? tasks : tasks.filter((task) => task.id === +id);
    console.log(id);
    res.status(200).send(idRes);
  }
});

app.patch("/tasks/:id", async (req, res, next) => {
  const { id } = req.params;
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
  await fs.writeFile(usersFilePath, JSON.stringify(editTask, null, 5));
  res.status(204).send();
});
//api to get all todos with filter for id

app.delete("/tasks/:id", async (req, res, next) => {
  const { id } = req.params;
  let notRemovedTask = tasks.filter((task) => {
    return +id !== task.id;
  });

  await fs.writeFile("./tasks.json", JSON.stringify(notRemovedTask, null, 5));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
