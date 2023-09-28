import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const user = {
      email: "teste@t.com",
      password: "123456"
    }

    const response = await api.post("/users").send(user);

    expect(response.status).toBe(201);
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    const user = {
      email: "teste@t.com",
      password: "123456"
    }

    await prisma.user.create({ data: user });

    const response = await api.post("/users").send(user);

    expect(response.status).toBe(409);
  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const userData = {
      email: "teste@t.com",
      password: "123456"
    }

    const user = await prisma.user.create({ data: userData });

    const response = await api.get(`/users/${user.id}`);

    expect(response.body).toEqual(user);
  });

  it("should return 404 when can't find a user by id", async () => {
    const { status } = await api.get(`/users/1`);

    expect(status).toBe(404);
  });

  it("should return all users", async () => {
    const userData1 = {
      email: "teste@t.com",
      password: "123456"
    }

    const userData2 = {
      email: "teste2@t.com",
      password: "123456"
    }

    const user1 = await prisma.user.create({ data: userData1 });
    const user2 = await prisma.user.create({ data: userData2 });

    const response = await api.get(`/users`);

    expect(response.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({
          email: expect.any(String)
        })]
      )
    );
  });
});