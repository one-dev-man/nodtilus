"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arraysutil_1 = __importDefault(require("./utils/arraysutil"));
const await_1 = __importDefault(require("./utils/await"));
const filesutil_1 = __importDefault(require("./utils/filesutil"));
const jsontypechecker_1 = require("./utils/jsontypechecker");
const listener_class_1 = require("./utils/listener.class");
const mapsutil_1 = __importDefault(require("./utils/mapsutil"));
const nodtilus = {
    arrays: arraysutil_1.default,
    await: await_1.default,
    files: filesutil_1.default,
    json: {
        type: {
            check: jsontypechecker_1.JsonTypeChecker
        }
    },
    listener: {
        class: listener_class_1.Listener,
        static: listener_class_1.StaticListener,
        object: listener_class_1.ObjectListener
    },
    maps: mapsutil_1.default
};
exports.default = nodtilus;
