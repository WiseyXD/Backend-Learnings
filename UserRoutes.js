const app = require("express");
const router = app.Router();
const userRegister = require("./UserController");

router.route("/register").post(userRegister);
