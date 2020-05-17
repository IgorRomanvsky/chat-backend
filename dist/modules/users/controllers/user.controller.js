"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
class UserController {
    constructor() { }
    createNewUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.checkIfUserExists(userName);
            if (userExists) {
                return userExists;
            }
            else {
                const user = new user_schema_1.default({
                    userName,
                });
                return user.save();
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return user_schema_1.default.find();
        });
    }
    checkIfUserExists(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_schema_1.default.findOne({ userName });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map