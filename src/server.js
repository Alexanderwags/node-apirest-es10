import express from "express";
import router from "./routers/index.routes";

const app = express();
//settings
app.set("port", process.env.PORT || 3000);
//routers
app.use(router);

export default app;
