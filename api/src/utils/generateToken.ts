// Json Web Token (JWT)
import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import UserServices from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

const logInWithCredentials = async (
  req: Request,
  res: Response
) => {
  try {
     const userData = await UserServices.findUserByEmail(req.body.email);
    // //console.log(userData);
    if(!userData){
      res.json(`User Email: ${req.body.email} Cannot found!`);
      return;
    }

    // jwt token generate here
    // Need 3 things:- 1: user entered data | 2: JWT Secret | 3: token's time (expirey)
    const token = jwt.sign(
      {email: req.body.email, fullName: userData.fullName},
      JWT_SECRET,
      {expiresIn: "1h"}
    );

    res.json({userData, token});
    
  } catch (error) {
    console.log(error);
  }
}

export default logInWithCredentials;