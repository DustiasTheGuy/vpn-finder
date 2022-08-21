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
exports.getProductController = void 0;
const models_1 = require("../../models");
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield models_1.ProductModel.findOne({ _id: req.params.id });
        return res.status(200).json({
            message: null,
            status: 200,
            success: true,
            data: document,
        });
    }
    catch (err) {
        return res.json({
            message: 'You passed an invalid id',
            status: 400,
            success: false,
            data: null,
        });
    }
});
exports.getProductController = getProductController;
