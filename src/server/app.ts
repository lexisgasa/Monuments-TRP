import express from "express";
import { monumentsRouter } from "../router/monumentsRouter.js";

export const app = express();

app.use("/monuments", monumentsRouter);
