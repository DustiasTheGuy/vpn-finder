"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = require("./controllers/create");
const delete_1 = require("./controllers/delete");
const read_1 = require("./controllers/read");
const update_1 = require("./controllers/update");
const router = express_1.default.Router();
router.post('/create', create_1.createProductController);
router.get('/delete/:id', delete_1.deleteProductController);
router.get('/read', read_1.getProductsController);
router.get('/read/:id', read_1.getProductController);
router.post('/update', update_1.updateProductController);
exports.default = router;
