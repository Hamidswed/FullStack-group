// user router here

import { Router } from "express";
import passport from "passport";
import AdminCheck from "../middlewares/adminCheck";

import {
  getUserListController,
  createUserController,
  deleteUserByIdController,
  updateUserByIdController,
  logInWithPassword,
  getUserByIdController,
} from "../controllers/users";

const userRouter = Router();

// Call Express Methods for User Collection by userRouter
userRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  getUserListController
);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/", createUserController);
userRouter.delete("/:id", deleteUserByIdController);
userRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserByIdController
);
userRouter.post("/logIn", logInWithPassword);

export default userRouter;
