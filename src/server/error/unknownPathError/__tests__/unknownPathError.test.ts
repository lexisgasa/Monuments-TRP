import { type NextFunction, type Request, type Response } from "express";
import { unknownPathError } from "../unknownPathError";
import { ServerError } from "../../ServerError";

describe("Given the unknownPathError function", () => {
  describe("When it receives a request with an unknown path", () => {
    test("Then it should return the message 'Path not found'", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const next: NextFunction = jest.fn().mockReturnThis();
      const error = new ServerError("Endpoint not found", 404);

      unknownPathError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
