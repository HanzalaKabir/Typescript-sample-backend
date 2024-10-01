import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  number: number;
  password: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export { User, IUser };
