import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

  it("should return 200 when ask /fibonacci", async () => {
    const numberOfElements = 10;
    const { status, body } = await api.get(`/fibonacci?elements=${numberOfElements}`);
    expect(status).toBe(200);
    expect(body).toHaveLength(numberOfElements);
  })

  it("should return 400 when ask /fibonacci with invalid number of elements", async () => {
    const numberOfElements = -5;
    const { status } = await api.get(`/fibonacci?elements=${numberOfElements}`);
    expect(status).toBe(400);
  })

  it("should return 400 when ask /fibonacci with invalid number of elements", async () => {
    const { status } = await api.get(`/fibonacci`);
    expect(status).toBe(400);
  })

  it("should return 400 when ask /fibonacci with invalid number of elements", async () => {
    const numberOfElements = 'abc';
    const { status } = await api.get(`/fibonacci?elements=${numberOfElements}`);
    expect(status).toBe(400);
  })
})