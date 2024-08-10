import express from "express";
import morgan from "morgan";
import { monumentsRouter } from "../router/monumentsRouter.js";
import cors from "cors";

export const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/monuments", monumentsRouter);
