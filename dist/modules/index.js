"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routs_1 = __importDefault(require("../modules/users/routs"));
const routs_2 = __importDefault(require("../modules/conversations/routs"));
const routs_3 = __importDefault(require("../modules/messages/routs"));
exports.default = [...routs_1.default, ...routs_2.default, ...routs_3.default];
//# sourceMappingURL=index.js.map