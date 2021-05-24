const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const AddressController = require("./controllers/AddressController");
const AddressValidator = require("./validators/AddressValidator");

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

//address
routes.get(
  "/users/:address_id",
  AddressValidator.getById,
  auth.authenticateToken,
  AddressController.getById
);
routes.post("/address", AddressValidator.create, AddressController.create);
routes.put(
  "/address/:address_id",
  AddressValidator.update,
  auth.authenticateToken,
  AddressController.update
);
routes.delete(
  "/address/:address_id",
  AddressValidator.delete,
  auth.authenticateToken,
  AddressController.delete
);

module.exports = routes;
