import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string ,email: string) {
  
  prisma.user.create({
    date:  {
      username,
      password,
      firstName,
      lastName,
      email
    }
  })
}