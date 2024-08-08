import type { Request, Response } from "express";
import { MonumentsController } from "../MonumentsController";
import { monuments } from "../../../data";

describe("Given the getMonuments method of MonumentsController", () => {
  const monumentsController = new MonumentsController();
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks);

  describe("When it receives a response", () => {
    test("Then it should call the response's status method with the value 200", () => {
      monumentsController.getMonuments(req as Request, res as Response);
      expect(res.status).toHaveBeenCalled();
    });

    test("Then it should call the response's json method with a list of monuments", () => {
      monumentsController.getMonuments(req as Request, res as Response);
      expect(res.json).toHaveBeenCalledWith({ monuments });
    });
  });
});
