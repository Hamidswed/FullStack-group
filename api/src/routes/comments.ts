// comment router here

import { Router } from "express";
import passport from "passport";
import AdminCheck from "../middlewares/adminCheck"

import {
  getCommentsByUserIdController,
  getAllCommentsController,
  createCommentController,
  deleteCommentByIdController,
} from "../controllers/comments";

const commentRouter = Router();

// Call Express Methods for comments Collection (DB) by using commentRouter
commentRouter.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getCommentsByUserIdController
);
commentRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  getAllCommentsController
);
commentRouter.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createCommentController
);
commentRouter.delete(
  "/:commentId",
  passport.authenticate("jwt", { session: false }),
  AdminCheck,
  deleteCommentByIdController
);


export default commentRouter;
