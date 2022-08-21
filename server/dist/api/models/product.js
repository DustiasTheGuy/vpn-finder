"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductModel = mongoose_1.default.model('Product', new mongoose_1.default.Schema({
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: false,
        default: 0,
    },
    priority: {
        type: Boolean,
        default: false,
    },
    freeOption: {
        type: Boolean,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    moneyBack: {
        type: Boolean,
        required: true,
    },
    onSaleData: {
        onSale: {
            type: Boolean,
            default: false,
        },
        discount: {
            type: Number,
            default: 0,
        },
    },
    features: {
        type: Array,
        required: true,
    },
}));
