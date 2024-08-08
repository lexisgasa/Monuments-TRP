import type { Request, Response } from "express";
import type { MonumentsControllerStructure } from "../types.js";
import { sevenWonders } from "../../data.js";

export class MonumentsController implements MonumentsControllerStructure {
  getMonuments(_req: Request, res: Response) {
    res.json({ sevenWonders });
  }
}
