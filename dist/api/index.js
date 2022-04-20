"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clothingItems_1 = __importDefault(require("./clothingItems"));
const orders_1 = __importDefault(require("./orders"));
const configureEndpoints = (express_app) => {
    (0, clothingItems_1.default)(express_app);
    (0, orders_1.default)(express_app);
};
exports.default = configureEndpoints;
//# sourceMappingURL=index.js.map