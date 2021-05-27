const request = require("supertest");
const app = require("../../src/app");

describe("test login functions", () => {
  it("should fail to login", async () => {
    const agent = request.agent(app, null);

    const res = await agent
      .post("/api/login")
      .send({
        username: "test@test.com",
        password: "password1",
      })
      .set("Content-Type", "application/json");
    expect(res.statusCode).toEqual(401);
  });
});
