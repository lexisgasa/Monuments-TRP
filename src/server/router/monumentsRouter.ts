import express from "express";
import { monuments } from "../../monuments/data.js";
import { MonumentsController } from "../../monuments/controller/MonumentsController/MonumentsController.js";

export const monumentsRouter = express.Router();

const monumentsController = new MonumentsController(monuments);

monumentsRouter.get("/", monumentsController.getMonuments);
