const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
});

const user = mongoose.model("user", schema);
user.on("index", (err) => {
  console.log(err);
});
module.exports = user;
