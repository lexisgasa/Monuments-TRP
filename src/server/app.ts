import express from "express";
import { monumentsRouter } from "../router/monumentsRouter.js";

const app = express();

app.use("/monuments", monumentsRouter);
