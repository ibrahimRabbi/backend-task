"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFounds = (req, res, next) => {
    return res.status(401).json({ success: false, status: 404, message: 'route not found' });
};
exports.default = notFounds;
