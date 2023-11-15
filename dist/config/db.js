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
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URI = "mongodb://0.0.0.0:27017/Easepay1";
const LIVE_URI = "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/EasePayApi?retryWrites=true&w=majority";
const dbConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connect = yield mongoose_1.default.connect(LIVE_URI);
        console.log(`database is connected to ${connect.connection.host}`);
    }
    catch (error) {
        console.log(`unable to connect to database ${error}`);
    }
});
exports.default = dbConfig;
