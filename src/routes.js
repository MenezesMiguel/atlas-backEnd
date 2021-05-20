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

// //address
// routes.get("/address/:address_id", AddressController.getById);
routes.post("/address", AddressController.create);
// routes.put("/address/:address_id", AddressController.update);
// routes.delete("/address/:address_id", AddressController.delete);

// //data
// routes.get("/data/:data_id", DataController.getById);
// routes.post("/data", DataController.create);
// routes.put("/data/:data_id", DataController.update);
// routes.delete("/data/:data_id", DataController.delete);

module.exports = routes;