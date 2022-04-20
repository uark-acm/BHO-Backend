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
exports.getClothingItems = void 0;
const lib_1 = require("@uark-acm/bho-data-models/lib");
const postgres_1 = __importDefault(require("../loaders/postgres"));
const getClothingItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryResponse = yield postgres_1.default.query('select * from clothing_items;');
    const dbClothingItems = (yield queryResponse).rows;
    return dbClothingItems.map(item => {
        return (0, lib_1.DatabaseRowToClothingItem)(item);
    });
});
exports.getClothingItems = getClothingItems;
//# sourceMappingURL=clothingItemsService.js.map