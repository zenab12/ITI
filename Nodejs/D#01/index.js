// import * as fs from "fs";
const fs = require("fs");
// console.log("ssss");npm i commander
const { program } = require("commander");
const { json } = require("stream/consumers");

// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const res = getFile("./counter.json")
//   .then((result) => JSON.parse(result))
//   .catch((err) => err);
// console.log(res);
//reading json files
const taskStr = fs.readFileSync("./tasks.json", { encoding: "utf8" });
const tasks = JSON.parse(taskStr);

let ctrStr = fs.readFileSync("./counter.json", { encoding: "utf8" });
let ctr = JSON.parse(ctrStr);
console.log(ctr);
// console.log(tasks);
const [, , action] = process.argv;

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("add")
  .description("add new task in To Do application ")
  .requiredOption("-t, --title <string>", "display the title of the task")
  .action((options) => {
    ctr.counter++;
    const newTask = {
      id: ctr.counter,
      title: options.title,
    };
    tasks.push(newTask);
    fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 5));

    fs.writeFileSync("./counter.json", JSON.stringify(ctr, null, 5));
  });

program
  .command("edit")
  .description("edit exist task in To Do application ")
  .requiredOption("-i, --id <number>", "select the title of the task")
  .requiredOption("-t, --title <string>", "edit the title of the task")
  .action((options) => {
    let editTask = tasks.map((task) => {
      return +options.id === task.id
        ? {
            ...task,
            title: options.title,
          }
        : task;
    });

    fs.writeFileSync("./tasks.json", JSON.stringify(editTask, null, 5));
  });

program
  .command("delete")
  .description("delete task in To Do application ")
  .requiredOption("-i, --id <string>", "display the title of the task")
  .action((options) => {
    let notRemovedTask = tasks.filter((task) => {
      return +options.id !== task.id;
    });

    fs.writeFileSync("./tasks.json", JSON.stringify(notRemovedTask, null, 5));
  });

// switch (action) {
//   case "add": {
//     const [, , , title] = process.argv;
//     let id = 0;
//     const newTask = {
//       id: tasks.length + 1,
//       title,
//     };
//     tasks.push(newTask);
//     fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 5));
//     break;
//   }
//   case "edit": {
//     const [, , , id, title] = process.argv;
//     let editTask = tasks.map((task) => {
//       return +id === task.id
//         ? {
//             id: id,
//             title: title,
//           }
//         : task;
//     });

//     fs.writeFileSync("./tasks.json", JSON.stringify(editTask, null, 5));
//     break;
//   }
//   case "delete":
//     const [, , , id] = process.argv;
//     let notRemovedTask = tasks.filter((task) => {
//       return +id !== task.id;
//     });

//     fs.writeFileSync("./tasks.json", JSON.stringify(notRemovedTask, null, 5));
//     break;
//   default:
//     break;
// }

let maxTask = tasks.find((task) => {
  Math.max(+task.id);
});
console.log(maxTask);
// console.log(action);
program.parse();
