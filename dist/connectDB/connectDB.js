var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbURI = process.env.MONGO_DB_URI;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(dbURI);
        useUnifiedTopology: true;
        useNewUrlParser: true;
    }
    catch (err) {
        console.log(err);
    }
});
export default connectDB;
//# sourceMappingURL=connectDB.js.map