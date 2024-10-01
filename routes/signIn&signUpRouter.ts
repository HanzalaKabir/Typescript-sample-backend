import { signUpController } from "../controllers/signIn&signUpController";
import { Router } from "express";

const userRouter = Router();
userRouter.route("/").post(signUpController);
export default userRouter;
