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
exports.getSingleUserController = exports.InsertUserController = void 0;
const user_services_1 = __importDefault(require("./user.services"));
const user_model_1 = require("./user.model");
const InsertUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertUserInDd = yield (0, user_services_1.default)(req.body);
        res.status(200).json({ success: true, status: 200, response: insertUserInDd });
    }
    catch (err) {
        next(err);
    }
});
exports.InsertUserController = InsertUserController;
const getSingleUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUser = yield user_model_1.userModel.findById(req.params.id).populate('profile');
        if (!getUser) {
            throw new Error('user not found');
        }
        res.status(200).json({
            success: true,
            status: 200,
            message: 'user retrive successfully',
            response: getUser
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleUserController = getSingleUserController;
