"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessWebhook = exports.DefaultSignatureValidator = void 0;
var crypto_1 = require("crypto");
var DefaultSignatureValidator = /** @class */ (function () {
    function DefaultSignatureValidator() {
    }
    DefaultSignatureValidator.isValid = function (signature, secretKey, responseData) {
        if (!signature) {
            return false;
        }
        secretKey = process.env.CHARGILY_APP_SECRET;
        if (secretKey === undefined) {
            throw new Error('The webhook signing secret is not set. Make sure that the `CHARGILY_APP_SECRET` config key is set to the correct value.');
        }
        var computedSignature = (0, crypto_1.createHmac)("sha256", secretKey).update(responseData).digest("hex");
        if (computedSignature !== signature) {
            throw new Error('The signature is invalid.');
        }
        return true;
    };
    DefaultSignatureValidator.prototype.isValid = function (APP_KEY, secretKey, responseData) {
        return false;
    };
    return DefaultSignatureValidator;
}());
exports.DefaultSignatureValidator = DefaultSignatureValidator;
var ProcessWebhook = /** @class */ (function () {
    function ProcessWebhook() {
    }
    return ProcessWebhook;
}());
exports.ProcessWebhook = ProcessWebhook;
