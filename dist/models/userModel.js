import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
});
const User = model("User", userSchema);
export { User };
//# sourceMappingURL=userModel.js.map