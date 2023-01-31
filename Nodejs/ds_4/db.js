// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri = "mongodb://localhost:27017/express-app";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     console.log("connnnect");

//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     // // let users = await client.db("express-app").collection("users");
//     // users.insertOne({
//     //   username: "Zien",
//     // });
//     const users = await client.db("express-app", null).collection("users");
//     users.insertMany({
//       username: "Zien Muhammad",
//     });
//     console.log(users);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     console.log("finally");
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/express-app")
  .then(() => console.log("connected sucessfuly"))
  .catch((err) => {
    console.log(err);
  });
// const user = mongoose.model("user", { name: String });

// const kitty = new user({ name: "Zildjian" });
// kitty
//   .save()
//   .then(() => console.log("connected sucessfuly"))
//   .catch((err) => {
//     console.log(err);
//   });
