import chalk from "chalk";
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(chalk.magentaBright("Listening on port 3000"));
});
