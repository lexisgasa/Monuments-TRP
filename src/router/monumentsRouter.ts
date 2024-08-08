import express from "express";
import { sevenWonders } from "../monuments/data.js";

export const monumentsRouter = express.Router();

monumentsRouter.get("/", (_req, res) => {
  res.json({ sevenWonders });
});
