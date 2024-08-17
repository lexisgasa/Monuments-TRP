import type { NextFunction, Request, Response } from "express";

export interface HealthCheckControllerStructure {
  getPing: (req: Request, res: Response, next: NextFunction) => void;
}
