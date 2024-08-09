import express from "express";
import morgan from "morgan";
import { monumentsRouter } from "../router/monumentsRouter.js";

export const app = express();

app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);
