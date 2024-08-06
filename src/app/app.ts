import chalk from "chalk";
import express from "express";
import { monumentsRouter } from "../router/monumentsRouter.js";

const app = express();

app.listen(3000, () => {
  console.log(chalk.magentaBright("Listening on port 3000"));
});

app.use("/monuments", monumentsRouter);
