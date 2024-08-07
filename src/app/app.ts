import chalk from "chalk";
import express from "express";
import { monumentsRouter } from "../router/monumentsRouter.js";

const app = express();

const startApp = () => {
  const port = process.env.PORT ?? 3100;

  app.listen(port, () => {
    console.log(chalk.magentaBright(`Listening on port ${port}`));
  });
};

startApp();

app.use("/monuments", monumentsRouter);
