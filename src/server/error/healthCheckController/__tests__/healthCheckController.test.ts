import type { Request, Response } from "express";
import { HealthCheckController } from "../healthCheckController";

describe("Given the healthCheckController function", () => {
  describe("When it receives a request", () => {
    const healthCheckController = new HealthCheckController();
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call the response's method status with the value 200", () => {
      const expectedStatusCode = 200;

      healthCheckController.getPing(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with the value Pong", () => {
      const expectedMessage = { message: "Pong" };

      healthCheckController.getPing(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
