"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = require("process");
const api_1 = __importDefault(require("./api"));
const app = (0, express_1.default)();
if (!process.env.MONGO_URI) {
    console.error('MONGO_UI env variable is not set');
    (0, process_1.exit)(1);
}
mongoose_1.default.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('./public'));
app.use('/website', api_1.default);
app.get('*', (_, res) => res.sendFile('index.html', { root: './public' }));
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});
