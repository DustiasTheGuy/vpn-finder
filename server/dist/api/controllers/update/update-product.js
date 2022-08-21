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
exports.updateProductController = void 0;
const models_1 = require("../../models");
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.ProductModel.findByIdAndUpdate({ _id: req.body._id }, req.body);
        res.json({
            message: 'Product has been updated',
            statusCode: 200,
            success: true,
            data: null,
        });
    }
    catch (err) {
        res.json({
            message: err,
            statusCode: 200,
            success: false,
            data: null,
        });
    }
});
exports.updateProductController = updateProductController;
