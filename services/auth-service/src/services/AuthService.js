import bcrypt from "bcryptjs";
import UserRepository from "../repositories/UserRepository.js";
import { generateToken } from "../utils/generateToken.js";

class AuthService {
  async register(email, password, role = "PATIENT") {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.create({
      email,
      password: hashedPassword,
      role,
    });
    const token = generateToken(user);

    return { user, token };
  }

  async login(email, password) {
    const existingUser = await UserRepository.findByEmail(email);
    if (!existingUser) {
      throw new Error("User does not exist!");
    }

    if (!(await bcrypt.compare(password, existingUser.password))) {
      throw new Error("Invalid Credentials");
    }

    const token = generateToken(existingUser);
    return { user: existingUser, token };
  }
}

export default new AuthService();
