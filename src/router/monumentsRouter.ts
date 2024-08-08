import express from "express";
import { MonumentsController } from "../monuments/controller/MonumentsController/MonumentsController.js";

export const monumentsRouter = express.Router();

const monumentsController = new MonumentsController();

monumentsRouter.get("/", monumentsController.getMonuments);
