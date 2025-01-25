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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUserController = void 0;
const profile_model_1 = require("./profile.model");
const getSingleUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUser = yield profile_model_1.profileModel.findById(req.params.id);
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
