import type { Request, Response } from "express";
import type { MonumentsControllerStructure } from "../types.js";
import { type Monument } from "../../types.js";

export class MonumentsController implements MonumentsControllerStructure {
  constructor(readonly monuments: Monument[]) {}

  getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };
}
