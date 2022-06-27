"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FilesUtil {
    static mkdirs(p) {
        !fs_1.default.existsSync(path_1.default.dirname(p)) ? this.mkdirs(path_1.default.dirname(p)) : null;
        !fs_1.default.existsSync(p) ? fs_1.default.mkdirSync(p) : null;
    }
    static rmrf(p) {
        if (fs_1.default.statSync(p).isDirectory()) {
            let fl = fs_1.default.readdirSync(p);
            for (let i = 0; i < fl.length; ++i) {
                this.rmrf(path_1.default.join(p, fl[i]));
            }
            fs_1.default.rmdirSync(p);
        }
        else
            fs_1.default.unlinkSync(p);
    }
    static delete(p) {
        if (fs_1.default.statSync(p).isDirectory()) {
            if (fs_1.default.readdirSync(path_1.default.dirname(p)).length == 0) {
                this.rmrf(p);
            }
        }
        else {
            fs_1.default.unlinkSync(p);
            this.delete(path_1.default.dirname(p));
        }
    }
}
exports.default = FilesUtil;
