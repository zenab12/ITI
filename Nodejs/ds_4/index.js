const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routers/users");
require("./db");

app.use("/users", userRouter);

//error handler
app.use((err, req, res, next) => {
  console.log(err);
  console.log("eeeeee");
  if (err) {
    err.statusCode = err.statusCode || 500;
    const handleERR = err.statusCode < 500;
    console.log(err);
    res
      .status(err.statusCode)
      .send(handleERR ? err.message : "internal server error");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
