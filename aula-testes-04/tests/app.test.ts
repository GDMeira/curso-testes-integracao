import app from "app";
import supertest from "supertest";


const server = supertest(app);

describe("GET /", () => {
    it("should return 200 OK", async () => {
        const response = await server.get("/health");

        expect(response.status).toEqual(200);
    })
})