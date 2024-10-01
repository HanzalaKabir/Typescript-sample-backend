import { Request, Response } from "express";
import { User, IUser } from "../models/userModel.js";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const userObject: IUser = {
      name: req.body.name,
      number: req.body.number,
      password: req.body.password,
    };
    const newUser = new User(userObject);
    const response = await newUser.save();
    console.log(response);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
