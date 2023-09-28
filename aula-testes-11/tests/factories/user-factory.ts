import { UserInput } from "../../src/repository";
import prisma from "../../src/database";

export async function createUser(userData: UserInput) {
  const createdUser = await prisma.user.create({
    data: userData
  });

  return createdUser;
}