import type { Request, Response } from "express";

export interface HealthCheckControllerStructure {
  getPing: (req: Request, res: Response) => void;
}
