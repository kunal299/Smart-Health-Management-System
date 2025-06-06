import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserRepository {
  async create(user) {
    return await prisma.user.create({
      data: user,
    });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}

export default new UserRepository();
