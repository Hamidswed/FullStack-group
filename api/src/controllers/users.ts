// User Controller: logic to deal with request and response

import { Request, Response } from "express";

import User from "../models/User";
import UserServices from "../services/users";

//1: Get (User) Controller
export const getUserListController = async (req: Request, res: Response) => {
  try {
    const userList = await UserServices.getUserList();
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

//2: Post (User) Controller
export const createUserController = async (req: Request, res: Response) => {
  try {
    // We'll get user here from FrontEnd | Client
    // User function | Collection import from Model
    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
    });

    // New user will save in DB via services and that user will return as well
    const user = await UserServices.createUser(newUser);

    // Response back to Frontend
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//3: Delete Controller
export const deleteUserByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteUser = await UserServices.deleteUserById(
      req.params.id
    );
    res.json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};

//4: Update Controller
export const updateUserByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const updateUser = await UserServices.updateUserById(
      req.params.id,
      req.body
    );
    res.json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
