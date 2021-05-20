const UserModel = require("../models/UserModel");

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
module.exports = {
  async create(request, response) {
    try {
      const user = request.body;

      const result = await UserModel.create(user);
      return response.status(200).json(result);
    } catch (err) {
      console.log("User creation failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to create user",
      });
    }
  },
  async getById(request, response) {
    try {
      const { user_id } = request.params;
      const result = await User.getById(user_id);

      return response.status(200).json(result);
    } catch (err) {
      console.log("User getById failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to get user",
      });
    }
  },
  async update(request, response) {
    try {
      const { user_id } = request.params;
      const user = request.body;
      const result = await User.updateById(user_id, user);

      return response.status(200).json(result);
    } catch (err) {
      console.log("User update failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to update user",
      });
    }
  },
  async delete(request, response) {
      try {
          const { user_id } = request.params;

          const result = await User.deleteById(user_id);
          return response.status(200).json(result);
    } catch (err) {
          console.log("User delete failed: " + err);
          return response.status(500).json({
            notification: "Internal server error while trying to delete user",
        });
    }
}
};
