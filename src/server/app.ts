import express from "express";
import morgan from "morgan";
import cors from "cors";
import { monumentsRouter } from "./router/monumentsRouter.js";
import { generalError } from "./error/generalError/generalError.js";
import { unknownPathError } from "./error/unknownPathError/unknownPathError.js";

export const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use(unknownPathError);

app.use(generalError);
