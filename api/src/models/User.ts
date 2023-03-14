import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isBanned: boolean;
  image: string;
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default:
      "https://source.boringavatars.com/pixel/120/Stefan?colors=26a653,2a1d8f,79646a",
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);