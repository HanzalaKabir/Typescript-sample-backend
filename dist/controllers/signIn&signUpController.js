var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../models/userModel.js";
export const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userObject = {
            name: req.body.name,
            number: req.body.number,
            password: req.body.password,
        };
        const newUser = new User(userObject);
        const response = yield newUser.save();
        console.log(response);
        res.send(response);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
//# sourceMappingURL=signIn&signUpController.js.map