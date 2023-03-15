// user router here

import { Router } from "express";
import passport from "passport";

import {
  getUserListController,
  createUserController,
  deleteUserByIdController,
  updateUserByIdController,
  logInWithPassword,
  getUserByIdController,
  googleAuthenticateController,
} from "../controllers/users";

const userRouter = Router();

// Call Express Methods for User Collection by userRouter
userRouter.get("/", getUserListController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/", createUserController);
userRouter.delete("/:id", deleteUserByIdController);
userRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserByIdController
);
userRouter.post(
  "/googleLogIn",
  passport.authenticate("google-id-token", { session: false }),
  googleAuthenticateController
);
userRouter.post("/logIn", logInWithPassword);

export default userRouter;
