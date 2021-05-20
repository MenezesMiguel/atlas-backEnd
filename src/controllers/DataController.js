const Data = require("../models/Data");

module.exports = {
  async create(request, response) {
    try {
      const newData = request.body;
      const result = await Data.create(newData);

      return response.status(200).json({ data_id: result });
    } catch (error) {
      console.warn("Data creation failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create Data",
      });
    }
  },
  async getByUser(request, response) {
    try {
    } catch (error) {
      console.warn("Data creation failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create Data",
      });
    }
  },
  async update(request, response) {
    try {
      const { data_id } = request.params;
      const newData = request.body;
      const result = await Data.updateById(data_id, newData); 
      
      if (result === 0)
      return response.status(400).json({ notification: "Data not found" });
  
      return response
        .status(200)
        .json({ notification: "Informacoes atualizadas com sucesso!" });
    } catch (error) {
      console.warn("Data update failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to update Data",
      });
    }
  },
  async delete(request, response) {
    try {
      const { data_id } = request.params;
      const result = await Data.deleteById(data_id);

      if (result === 0)
        return response.status(400).json({ notification: "Data not found" });

      return response
        .status(200)
        .json({ notification: "Informacoes deletadas com sucesso!" });
    } catch (error) {
      console.warn("Data delete failed:", error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete Data",
      });
    }
  },
};
