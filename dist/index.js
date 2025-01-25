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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const globalError_1 = require("./app/middleware/globalError");
const user_route_1 = require("./app/module/users/user.route");
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const profile_route_1 = require("./app/module/profiles/profile.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/user', user_route_1.userRoute);
app.use('/profile', profile_route_1.profileRoute);
app.use(notFound_1.default);
app.use(globalError_1.globalError);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(config_1.default.MONGO_URI);
        app.listen(config_1.default.PORT, () => {
            console.log('Server is running on port 5000');
        });
    });
}
main();
