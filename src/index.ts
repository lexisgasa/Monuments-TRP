import { startApp } from "./server/startApp.js";

const port = process.env.PORT ?? 3100;

startApp(Number(port));
