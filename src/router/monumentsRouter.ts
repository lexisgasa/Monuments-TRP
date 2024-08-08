import express from "express";
import { monuments } from "../monuments/data.js";

export const monumentsRouter = express.Router();

monumentsRouter.get("/", (_req, res) => {
  res.json({ sevenWonders: monuments });
});
