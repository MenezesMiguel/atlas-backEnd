const Firebase = require("../utils/firebase");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password } = request.body;
      let uid;
      try {
        uid = await Firebase.login(email, password);
      } catch (error) {
        console.warn(error);
        return response
          .status(403)
          .json({ notification: "Invalid Credentials" });
      }
      const user = await UserModel.getByFields({ firebase_id: uid });

      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
      });

      return response.status(200).json({ user, accessToken });
    } catch (error) {
      return response
        .status(500)
        .json({ notification: "Error while trying to validate credentials" });
    }
  },
};
