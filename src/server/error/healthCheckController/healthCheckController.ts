import type { Request, Response } from "express";
import type { HealthCheckControllerStructure } from "./types";

export class HealthCheckController implements HealthCheckControllerStructure {
  getPing = (_req: Request, res: Response): void => {
    res.status(200).json({ message: "Pong" });
  };
}
