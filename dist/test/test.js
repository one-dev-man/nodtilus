"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodtilus_1 = __importDefault(require("../nodtilus"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let fp = path_1.default.join(__dirname, "./x/test.txt");
nodtilus_1.default.files.mkdirs(path_1.default.dirname(fp));
fs_1.default.writeFileSync(fp, "abc");
setTimeout(() => {
    nodtilus_1.default.files.delete(fp);
}, 2500);
