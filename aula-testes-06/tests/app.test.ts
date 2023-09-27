import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200", async () => {
    const res = await api.get("/event");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String)
    })
  })
});