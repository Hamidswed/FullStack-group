// comment router here

import { Router } from "express";
import passport from "passport";

import {
    getCommentListController,
    createCommentController,
    deleteCommentByIdController,
    updateCommentByIdController,
} from "../controllers/comments";

const commentRouter = Router();

// Call Express Methods for comments Collection (DB) by using commentRouter
commentRouter.get("/", passport.authenticate("jwt", { session: false }), getCommentListController);
commentRouter.post("/:userId", createCommentController);
commentRouter.delete("/:orderId", deleteCommentByIdController);
commentRouter.put("/:orderId", updateCommentByIdController);

export default commentRouter;
