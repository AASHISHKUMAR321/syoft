const express = require("express");
const app = express();
const connect = require("./config/db");
const cors = require("cors");
const { signup, login } = require("./controllers/user.controller");
const { body, validationResult } = require("express-validator");

app.use(express.json());
app.use(cors());

const port = 5000;

app.use(
  "/register",
  body("username").notEmpty().isString().isLength({ min: 3, max: 20 }),
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 5, max: 20 }),
  body("phone").isLength(10),
  body("role").notEmpty(),
  signup
);
app.use(
  "/login",
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 5, max: 20 }),
  login
);

app.listen(port, async () => {
  try {
    await connect();
    console.log("server is running ");
  } catch (err) {
    console.log(err);
  }
});
