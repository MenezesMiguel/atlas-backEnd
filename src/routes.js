const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const SessionController = require("./controllers/SessionController");

//Sessao
routes.post("/login", SessionController.signIn);

//users
routes.get("/users/:user_id", UserValidator.getById, UserController.getById);
routes.post("/users", UserValidator.create, UserController.create);
routes.put("/users/:user_id", UserValidator.update, UserController.update);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete);

module.exports = routes;
