const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");
module.exports = {
  async create(data) {
    const data_id = uuidv4();
    data.data_id = data_id;

    await connection("data").insert(data);
    return data_id;
  },

  async getById({ data_id, user_id }) {
    const result = await connection("data")
      .where({ data_id, user_id })
      .select("*");
    return result;
  },

  async updateById(data_id, data) {
    const result = await connection("data")
      .where({ data_id })
      .update(data);
    return result;
  },
  async deleteById(data_id) {
    const result = await connection("data").where({ data_id }).delete();
    return result;
  },
};
