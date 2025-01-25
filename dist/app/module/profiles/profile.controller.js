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
exports.getProfiles = exports.createProfile = void 0;
const profile_model_1 = require("./profile.model");
const createProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profile_model_1.profileModel.create(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: 'profile created successfully',
            response: profiles
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createProfile = createProfile;
const getProfiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profile_model_1.profileModel.findById(req.params.id);
        res.status(200).json({
            success: true,
            status: 200,
            message: 'profile retrive successfully',
            response: profiles
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getProfiles = getProfiles;
