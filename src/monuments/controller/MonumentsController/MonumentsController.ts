import type { Request, Response } from "express";
import type { MonumentsControllerStructure } from "../types.js";
import { monuments } from "../../data.js";

export class MonumentsController implements MonumentsControllerStructure {
  getMonuments(_req: Request, res: Response) {
    res.status(200).json({ monuments });
  }
}
