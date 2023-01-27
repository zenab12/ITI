const chalk = require("chalk");
const { readFile, writeFile } = require("fs/promises");
const { Command } = require("commander");
const program = new Command();
const log = console.log;
program
  .name("todo list")
  .description("CLI to make todo list with javascript")
  .version("1.0.0");

// add task to todo list
program
  .command("add")
  .description("add task in your todo list")
  .requiredOption("-t, --title <string>", "the title of the task")
  .option(
    "-s, --status [value]",
    "the status of the task from values [todo,doing,done] you should edit with one of them"
  )
  .action((options) => {
    const addTask = async () => {
      const dbStr = await readFile("db.json", "utf-8");
      const db = JSON.parse(dbStr);
      log(db);
      //reading counter value from counter json file then increment it
      const ctrStr = await readFile("counter.json", "utf-8");
      const ctr = JSON.parse(ctrStr);
      ctr.counter++;
      //set default status to our task
      if (options.status === undefined) options.status = "todo";
      else if (options.status === true) options.status = "doing";
      else options.status = options.status;
      db.push({
        id: ctr.counter,
        title: options.title,
        status: options.status,
      });

      await writeFile("counter.json", JSON.stringify(ctr, null, 4));
      await writeFile("db.json", JSON.stringify(db, null, 4));
    };
    addTask();
  });

//edit to do list
program
  .command("edit")
  .description("edit task in your todo list with id")
  .requiredOption("-i, --id <number>", "the id of the task")
  .requiredOption("-t, --title <string>", "the title of the task")
  .option(
    "-s, --status [value]",
    "the status of the task from values [todo,doing,done] if you don't write any thing or option it will be setted with todo by default and if you use -s it will be set with doing and if you set with -s done it will be set with done"
  )
  .action((options) => {
    const editTask = async () => {
      const dbStr = await readFile("db.json", "utf-8");
      const db = JSON.parse(dbStr);
      let editableDb = db.map((item) => {
        if (item.id === +options.id) {
          return {
            ...item,
            title: options.title,
            status: options.status,
          };
        } else {
          return { ...item };
        }
      });

      await writeFile("db.json", JSON.stringify(editableDb, null, 4));
    };
    editTask();
  });

//delete task from todo list using id
program
  .command("delete")
  .description("delete task from your todo list using id")
  .requiredOption("-i, --id <number>", "the id of the task")
  .action((options) => {
    const deleteTask = async () => {
      const dbStr = await readFile("db.json", "utf-8");
      const db = JSON.parse(dbStr);
      let editableDb = db.filter((item) => {
        if (item.id !== +options.id) {
          return {
            ...item,
          };
        } else {
          return;
        }
      });

      await writeFile("db.json", JSON.stringify(editableDb, null, 4));
    };
    deleteTask();
  });

//list tasks
program
  .command("list")
  .description("list all tasks in your todo list")
  .action((options) => {
    let listTasks = async () => {
      const dbStr = await readFile("db.json", "utf-8");
      const db = JSON.parse(dbStr);
      db.forEach((element) => {
        // log(chalk.greenBright(JSON.stringify(element)));
        log(element);
      });
    };
    listTasks();
  });

//filter tasks using status
program
  .command("filter")
  .description("list all tasks in your todo list based on status")
  .option(
    "-s, --status <string>",
    "status of the task between 3 values[todo,doing,done] "
  )
  .action((options) => {
    let filterTasks = async () => {
      const dbStr = await readFile("db.json", "utf-8");
      const db = JSON.parse(dbStr);
      db.filter((element) => {
        if (element.status == options.status) {
          for (let key in element) {
            log(
              `${chalk.bgBlueBright.white(key)} :${chalk.bgWhiteBright.yellow(
                element[key]
              )} `
            );
          }
          log(
            chalk.blueBright(
              "==================================================================================="
            )
          );
        }
      });
    };
    filterTasks();
  });

program.parse();

//to test chalk library
// log(chalk.blue("Hello world!"));
// log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );
