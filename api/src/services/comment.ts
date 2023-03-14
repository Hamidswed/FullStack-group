import Comment, { CommentDocument } from "../models/Comment";

const createComment = async (
  comment: CommentDocument
): Promise<CommentDocument> => {
  return comment.save();
};

const getCommentList = async (
  userIdRequest: string
): Promise<CommentDocument[]> => {
  return Comment.find({ userId: userIdRequest }).populate("userId");
};

export default {
  createComment,
  getCommentList,
};
