"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = exports.EPAY_CHARGILY_URL = exports.Mode = void 0;
var Mode;
(function (Mode) {
    Mode["CIB"] = "CIB";
    Mode["EDAHABIA"] = "EDAHABIA";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.EPAY_CHARGILY_URL = "http://epay.chargily.com.dz/api/invoice";
var Invoice = /** @class */ (function () {
    function Invoice() {
        this.invoice = {};
    }
    Object.defineProperty(Invoice.prototype, "appKey", {
        get: function () {
            return this._appKey;
        },
        set: function (appKey) {
            this._appKey = appKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (client) {
            if (typeof client === "undefined")
                throw new Error("client must be declared");
            this._client = client;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (amount) {
            if (amount <= 75)
                throw new Error("amount must be more or equal 100");
            this._amount = amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (discount) {
            if (discount < 0 || discount >= 100) {
                throw new Error("The percentage is invalid");
            }
            this._discount = discount !== null && discount !== void 0 ? discount : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "invoiceNumber", {
        get: function () {
            return this._invoiceNumber;
        },
        set: function (invoiceNumber) {
            this._invoiceNumber = invoiceNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "backUrl", {
        get: function () {
            return this._backUrl;
        },
        set: function (backUrl) {
            this._backUrl = backUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "webhookUrl", {
        get: function () {
            return this._webhookUrl;
        },
        set: function (webhookUrl) {
            this._webhookUrl = webhookUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Invoice.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode;
        },
        enumerable: false,
        configurable: true
    });
    return Invoice;
}());
exports.Invoice = Invoice;
