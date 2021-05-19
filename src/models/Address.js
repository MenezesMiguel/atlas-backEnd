const connection = require("../database/connection");
module.exports = {
  async create() {
    const result = await connection("address").insert(address);
    return result;
  },

  async getById({ address_id, user_id }) {
    const result = await connection("address")
      .where({ address_id, user_id })
      .select("*");
    return result;
  },

  async updateById(address_id, address) {
    const result = await connection("address")
      .where(address_id)
      .update(address);
    return result;
  },
  async deleteById(address_id) {
    const result = await connection("address").where({ address_id }).delete();
    return result;
  },
};
