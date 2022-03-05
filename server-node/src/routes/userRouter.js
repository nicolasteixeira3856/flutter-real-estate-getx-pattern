const express = require("express");
const usersRouter = express.Router();
const userController = require("../controllers/userController");

usersRouter.post("/authenticate", userController.Authenticate);
usersRouter.post("/createUser", userController.CreateUser);

module.exports = usersRouter;