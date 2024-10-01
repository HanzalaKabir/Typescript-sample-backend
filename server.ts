import express, { Request, Response } from "express";
import connectDB from "./connectDB/connectDB.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { signUpController } from "./controllers/signIn&signUpController.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("This is the backend");
});

app.use("/signup", signUpController);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(3000, () => {
    console.log("Server is up and listening");
  });
});
