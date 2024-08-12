import express from "express";
import morgan from "morgan";
import { monumentsRouter } from "../router/monumentsRouter.js";

export const app = express();

app.use(morgan("dev"));

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  next();
});

app.use("/monuments", monumentsRouter);
