import type { NextFunction, Request, Response } from "express";
import { ServerError } from "../ServerError.js";

export const unknownPathError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const error = new ServerError("Endpoint not found", 404);

  next(error);
};
