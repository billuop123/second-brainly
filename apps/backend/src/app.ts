import express from "express";
import userRouter from "./router/userRouter";
import contentRouter from "./router/contentRouter";
import { authMiddleware } from "./authMiddleware";
const app = express();
app.use(express.json());
app.use("/api/v2/users", userRouter);
app.use("/api/v2/content", authMiddleware as any, contentRouter);
export default app;
