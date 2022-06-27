"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("./utils/arrays"));
const await_1 = __importDefault(require("./utils/await"));
const files_1 = __importDefault(require("./utils/files"));
const jsontypechecker_1 = require("./utils/jsontypechecker");
const listener_class_1 = require("./utils/listener.class");
const maps_1 = __importDefault(require("./utils/maps"));
const nodtilus = {
    arrays: arrays_1.default,
    await: await_1.default,
    files: files_1.default,
    json: {
        types: {
            check: jsontypechecker_1.JsonTypeChecker
        }
    },
    listener: {
        class: listener_class_1.Listener,
        static: listener_class_1.StaticListener,
        object: listener_class_1.ObjectListener
    },
    maps: maps_1.default
};
exports.default = nodtilus;
