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
