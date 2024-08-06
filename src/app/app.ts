import chalk from "chalk";
import express from "express";
import { sevenWonders } from "../monuments/data.js";

const app = express();

app.listen(3000, () => {
  console.log(chalk.magentaBright("Listening on port 3000"));
});

app.get("/monuments", (_req, res) => {
  res.json({ sevenWonders });
});
