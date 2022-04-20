"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_app = (0, express_1.default)();
express_app.use(body_parser_1.default.urlencoded({ extended: false }));
express_app.use(body_parser_1.default.json());
exports.default = express_app;
//# sourceMappingURL=express.js.map