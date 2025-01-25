"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const globalError = (err, req, res, next) => {
    res.status(404).json({
        success: false,
        status: 404,
        errorMessage: err.message,
        errorSource: err
    });
};
exports.globalError = globalError;
