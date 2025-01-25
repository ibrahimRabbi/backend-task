"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoute = void 0;
const express_1 = require("express");
const profile_controller_1 = require("./profile.controller");
exports.profileRoute = (0, express_1.Router)();
exports.profileRoute.post('/', profile_controller_1.createProfile);
exports.profileRoute.get('/:id', profile_controller_1.getProfiles);
