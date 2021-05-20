const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");
module.exports = {
  async create(address) {
    const address_id = uuidv4();
    address.address_id = address_id;

    const result = await connection("address").insert(address);
    return address_id;
  },

  async getById({ address_id }) {
    const result = await connection("address")
      .where({ address_id })
      .select("*")
      .first();
    return result;
  },

  async updateById(address_id, address) {
    const result = await connection("address")
      .where({ address_id })
      .update(address);
    return result;
  },
  async deleteById(address_id) {
    const result = await connection("address").where({ address_id }).delete();
    return result;
  },
};
