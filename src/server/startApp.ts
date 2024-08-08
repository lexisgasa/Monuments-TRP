import chalk from "chalk";
import { app } from "./app.js";

export const startApp = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.magentaBright(`Listening on port ${port}`));
  });
};
