import { db } from "../database/database.config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


import authConfig from "../configs/auth.js";

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    try {
      const user = await db.collection("users").findOne({ email });
      if (!user) {
        return response.status(401).json({ message: "E-mail e/ou senha incorreta" });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);
      if (!passwordMatched) {
        return response.status(401).json({ message: "E-mail e/ou senha incorreta" });
      }

      const token = jwt.sign({ userId: user._id }, authConfig.jwt.secret, {
        expiresIn: authConfig.jwt.expiresIn,
      });
        console.log(`Token criado com userId ${user._id}`);
      

      return response.json({ user, token });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export default SessionsController;