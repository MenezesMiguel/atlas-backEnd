const express = require("express");
const routes = express.Router();

const familiaPera = [
  {
    id: 0,
    name: "Arthur Braga",
  },
  {
    id: 1,
    name: "Joaquim Jose",
  },
  {
    id: 2,
    name: "Miguel Menezes",
  },
  {
    id: 3,
    name: "Leticia Lopes",
  },
  {
    id: 4,
    name: "Maria Joaquina",
  },
  {
    id: 5,
    name: "Joao Paulo",
  },
  {
    id: 6,
    name: "Gilberto Assis",
  },
];

routes.get("/home", (req, res) => {
  res.status(200).json(familiaPera);
});

routes.post("/home", (req, res) => {
  const newUser = req.body;

  familiaPera.push(newUser);

  res.json({ message: "Sucess" });
});

routes.put("/home/:user_Id", (req, res) => {
  const { userId } = req.params;
  const newFields = req.body;

  let selectedIndex;
  let selected = familiaPera.find((user, index) => {
    selectedIndex = index;
    return user.id === userId;
  });
  selected = { ...selected, ...newFields };

  familiaPera[selectedIndex] = selected;
  res.json({ message: "Sucess" });
});

routes.post("/home", (req, res) => {
  res.send(familiaPera);
});

module.exports = routes;
