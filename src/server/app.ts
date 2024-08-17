import express from "express";
import morgan from "morgan";
import cors from "cors";
import { serverRouter } from "./router/serverRouter.js";
import { generalError } from "./error/generalError/generalError.js";
import { unknownPathError } from "./error/unknownPathError/unknownPathError.js";
import { monumentsRouter } from "../monuments/router/monumentsRouter.js";

export const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use("/ping", serverRouter);

app.use(unknownPathError);

app.use(generalError);
