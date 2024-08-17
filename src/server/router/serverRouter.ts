import express from "express";
import { HealthCheckController } from "../error/healthCheckController/healthCheckController.js";

export const serverRouter = express.Router();

const healthCheckController = new HealthCheckController();

serverRouter.get("/", healthCheckController.getPing);
