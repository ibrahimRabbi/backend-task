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
const user_model_1 = require("./user.model");
const profile_model_1 = require("../profiles/profile.model");
const insertUserservice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const profileData = {
            bio: data.bio,
            interests: data.interests
        };
        const insertToProfile = yield profile_model_1.profileModel.create([profileData], { new: true, session: session });
        const userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            profile: insertToProfile[0]._id
        };
        const insertToDd = yield user_model_1.userModel.create([userData], { new: true, session: session });
        yield session.commitTransaction();
        yield session.endSession();
        return insertToProfile;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
exports.default = insertUserservice;
