import mongoose, { Document } from "mongoose";
import Food from "./Food";
import User from "./User";

export type CommentDocument = Document & {
  userId: string;
  foodId: string;
  title: string;
  message: string;
  date: Date;
  rate: number;
};

const CommentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Food,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  rate: {
    type: Number,
    default: 5,
  },
});

export default mongoose.model<CommentDocument>('Comment', CommentSchema)
