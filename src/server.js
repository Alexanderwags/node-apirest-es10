import express, { json } from "express";
import router from "./routers/index.routes";
import TaskRouter from "./routers/task.routers";

const app = express();
//settings
app.set("port", process.env.PORT || 3000);
//midelwares

app.use(json());
//routers
app.use(router);
app.use("/tasks", TaskRouter);
export default app;
