import express from "express";
import { MonumentsController } from "../monuments/controller/MonumentsController/MonumentsController.js";
import { monuments } from "../monuments/data.js";

export const monumentsRouter = express.Router();

const monumentsController = new MonumentsController(monuments);

monumentsRouter.get("/", monumentsController.getMonuments);
