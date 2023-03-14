// Comments Controller: logic to deal with request and response

import { Request, Response } from "express";

import Comment from "../models/Comment";
import commentServices from "../services/comments";

//1: Get Controller
export const getCommentListController = async (req: Request, res: Response) => {
  try {
    const commentList = await commentServices.getCommentsByUserId(
      req.params.id
    );
    res.json(commentList);
  } catch (error) {
    console.log(error);
  }
};

//2: Post Controller
export const createCommentController = async (req: Request, res: Response) => {
  try {
    // We'll get comment here from FrontEnd | Client
    // comment function|Collection|table import from Model
    const { foodId, title, message } = req.body;
    const newComment = new Comment({
      userId: req.params.userId,
      foodId: foodId,
      title: title,
      message: message,
    });

    // New comment will save in DB via services and that comment will return as well
    const comment = await commentServices.createComment(newComment);

    // Response back to Frontend
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};

//3: Delete Controller
// export const deleteCommentByIdController = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const deleteComment = await commentServices.deleteCommentById(
//       req.params.commentId
//     );
//     res.json(deleteComment);
//   } catch (error) {
//     console.log(error);
//   }
// };

//4: Update Controller
// export const updateCommentByIdController = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const updateComment = await commentServices.updateCommentById(
//       req.params.commentId,
//       req.body.commentsList
//     );
//     res.json(updateComment);
//   } catch (error) {
//     console.log(error);
//   }
// };
