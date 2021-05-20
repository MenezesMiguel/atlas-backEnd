const Address = require("../models/Address");

module.exports = {
  async create(request, response) {
    try {
      const newAddress = request.body;
      const result = await Address.create(newAddress);

      return response.status(200).json({ address_id: result });
    } catch (error) {
      console.warn("Address creation failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create address",
      });
    }
  },
  async getByUser(request, response) {
    try {
    } catch (error) {
      console.warn("Address creation failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create address",
      });
    }
  },
  async update(request, response) {
    try {
      const { address_id } = request.params;
      const newAddress = request.body;
      await Address.updateById(address_id, newAddress);

      return response
        .status(200)
        .json({ notification: "Endereco atualizado com sucesso!" });
    } catch (error) {
      console.warn("Address update failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to update address",
      });
    }
  },
  async delete(request, response) {
    try {
      const { address_id } = request.params;
      await Address.deleteById(address_id);

      return response
        .status(200)
        .json({ notification: "Endereco deletado com sucesso!" });
    } catch (error) {
      console.warn("Address delete failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete address",
      });
    }
  },
};
