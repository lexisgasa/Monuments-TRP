import type { NextFunction, Request, Response } from "express";
import type { ServerError } from "./ServerError";

export const generalError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode = (error as ServerError).statusCode || 500;

  res.status(statusCode).json({ message: error.message });
};
