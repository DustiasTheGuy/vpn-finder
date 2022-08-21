"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ext = (mimetype) => {
    switch (mimetype) {
        case 'image/jpeg':
            return 'jpeg';
        case 'image/jpg':
            return 'jpg';
        case 'image/png':
            return 'png';
        case 'image/gif':
            return 'gif';
        case 'text/plain':
            return 'txt';
        default:
            'txt';
    }
};
const createFile = (file, url, removeAfter) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile('./public/assets/files/' + file.name, file.data, (err) => {
            if (err) {
                reject({ success: false, err: err, data: null });
            }
            if (removeAfter) {
                setTimeout(() => {
                    fs_1.default.unlinkSync('./public/assets/files/' + file.name);
                }, 1000 * 1200); // 10 min
            }
            resolve({
                success: true,
                err: null,
                data: url + '/assets/files/' + file.name,
                name: file.name,
            });
        });
    });
};
module.exports = {
    ext,
    createFile,
};
