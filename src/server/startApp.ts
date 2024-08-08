import chalk from "chalk";
import express from "express";

const app = express();

export const startApp = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.magentaBright(`Listening on port ${port}`));
  });
};
