import User, { UserDocument } from "../models/User";

const createUser = async (
  user: UserDocument
): Promise<UserDocument | string> => {
  const foundUser = await User.findOne({ email: user.email });
  if (!foundUser) return user.save();
  else return "available";
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

const deleteUserById = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId);
  return foundUser;
};

const updateUserById = async (
  id: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(id, update, { new: true });
};

export default {
  createUser,
  getUserList,
  getUserById,
  findUserByEmail,
  deleteUserById,
  updateUserById,
};
