import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbURI = process.env.MONGO_DB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    useUnifiedTopology: true;
    useNewUrlParser: true;
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
