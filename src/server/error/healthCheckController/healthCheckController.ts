import type { Request, Response, NextFunction } from "express";
import type { HealthCheckControllerStructure } from "./types";

export class HealthCheckController implements HealthCheckControllerStructure {
  getPing = (_req: Request, res: Response, _next: NextFunction): void => {
    res.status(200).json({ message: "Pong" });
  };
}
