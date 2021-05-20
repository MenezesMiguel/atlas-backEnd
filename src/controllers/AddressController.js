const Address = require("../models/Address");

module.exports = {
  async create(request, response) {
    try {
      const newAddress = request.body;
      const result = await Address.creat(newAddress);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("Note creation failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create address",
      });
    }
  },
  async getByUser(request, response) {
    try {
    } catch (error) {}
  },
  async update(request, response) {
    try {
    } catch (error) {}
  },
  async delete(request, response) {
    try {
    } catch (error) {}
  },
};
