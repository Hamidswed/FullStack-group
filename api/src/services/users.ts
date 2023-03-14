import User, { UserDocument } from "../models/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

//for Admin
const getUserList = async (): Promise<UserDocument[]> => {
  return User.find();
};

const getUserById = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findById(userId);
  return foundUser;
};

const findUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const foundUser = await User.findOne({ email: email });
  return foundUser;
};
export default {
  createUser,
  getUserList,
  getUserById,
  findUserByEmail,
};
