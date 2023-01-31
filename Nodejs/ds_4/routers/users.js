const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  console.log(user);
});
router.get("/", (req, res, next) => {
  //   res.statusCode = 404;
  //   req.err.message = "sorry";
  //   throw new Error("errrrrr");
  //   console.log(res.statusCode);
  //   if (req.statusCode !== 200) {
  //     return next(req.err);
  //   }
  //   next();
  //   res.send("Hello World!");
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.use((err, req, res, next) => {
  res.status(500).send("nearst internal server error");
});

// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

module.exports = router;
