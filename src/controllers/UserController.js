const UserModel = require("../models/UserModel");
const firebase = require("../utils/firebase");

module.exports = {
  async create(request, response) {
    try {
      const user = request.body;

      const uid = await firebase.createNewUser(user.email, user.password);
      delete user.password;
      user.firebase_id = uid;

      const result = await UserModel.create(user);
      return response.status(200).json("user_id: " + result);
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
      const result = await UserModel.updateById(user_id, user);
      if (result === 0)
        return response
          .status(400)
          .json({ notification: "Cadastro not found" });

      return response.status(200).json("Cadastro atualizado com sucesso!");
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
      const result = await UserModel.deleteById(user_id);
      if (result === 0)
        return response.status(400).json({ notification: "User not found" });
      return response.status(200).json("Usuario deletado com sucesso!");
    } catch (err) {
      console.log("User delete failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to delete user",
      });
    }
  },
};
