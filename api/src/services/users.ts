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

const findUserByEmail = async (
  payload: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const userEmail = payload.email;
  const foundUser = await User.findOne({ email: userEmail });
  return foundUser;
};

export default {
  createUser,
  getUserList,
  getUserById,
  findUserByEmail,
};
