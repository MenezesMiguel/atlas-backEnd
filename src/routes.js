const express = require("express");
const routes = express.Router();

const AddressController = require("./controllers/AddressController");
const UserController = require("./controllers/UserController");
const DataController = require("./controllers/DataController");

//users
routes.get("/users/:user_id", UserController.getById);
routes.post("/users", UserController.create);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);

//address
routes.get("/address/:address_id", UserController.getById);
routes.post("/address", UserController.create);
routes.put("/address/:address_id", UserController.update);
routes.delete("/address/:address_id", UserController.delete);

//data
routes.get("/data/:data_id", UserController.getById);
routes.post("/data", UserController.create);
routes.put("/data/:data_id", UserController.update);
routes.delete("/data/:data_id", UserController.delete);