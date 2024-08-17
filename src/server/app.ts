import express from "express";
import morgan from "morgan";
import cors from "cors";
import { monumentsRouter } from "./router/monumentsRouter.js";
import { generalError } from "./error/generalError.js";
import { ServerError } from "./error/ServerError.js";

export const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use((_req, _res, next) => {
  next(new ServerError("Path not found", 404));
});

app.use(generalError);
