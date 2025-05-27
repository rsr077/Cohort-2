import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateUser(username: string, password: string, firstName: string, lastName: string) {
  try {
    const res = await prisma.user.create({
      data: {
        email: username,
        password,
        firstName,
        lastName
      },
      select: {
        id: true,
        password: true
      }
    });

    console.log("User created:", res);
    return res;
  } catch (err) {
    console.error("Error creating user:", err);
  }
}

updateUser("rajeev@gmail.com", "password", "rajeev", "singh");

export default prisma;
