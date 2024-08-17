import type { NextFunction, Request, Response } from "express";
import { ServerError } from "../ServerError.js";

export const unknownPathError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  next(new ServerError("Path not found", 404));
};
