// user router here

import { Router } from "express";
import passport from "passport";

import {
  getUserListController,
  createUserController,
  deleteUserByIdController,
  updateUserByIdController,
} from "../controllers/users";
import logInWithCredentials from "../utils/generateToken";

const userRouter = Router();

// Call Express Methods for User Collection by userRouter
userRouter.get("/", getUserListController);
userRouter.post("/", createUserController);
userRouter.delete("/:id", deleteUserByIdController);
userRouter.put("/:id",  passport.authenticate("jwt", { session: false }), updateUserByIdController);
userRouter.post("/logIn", logInWithCredentials);

export default userRouter;
