import Express from "express";
import cors from "cors";
import foodRouter from "./routes/food";
import userRouter from "./routes/users";
import commentRouter from "./routes/comments";

const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

export default app;
