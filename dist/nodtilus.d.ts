import ArraysUtil from "./utils/arrays";
import Await from "./utils/await";
import FilesUtil from "./utils/files";
import { JsonTypeChecker, TYPES, TYPE_OPTIONS } from "./utils/jsontypechecker";
import { Listener, StaticListener } from "./utils/listener.class";
import MapsUtil from "./utils/maps";
declare const nodtilus: {
    arrays: typeof ArraysUtil;
    await: typeof Await;
    files: typeof FilesUtil;
    json: {
        types: {
            check: typeof JsonTypeChecker;
        };
    };
    listener: {
        class: typeof Listener;
        static: typeof StaticListener;
        object: {
            get(): import("./utils/listener.class").OBJECT_LISTENER_TYPE;
            patch(l: import("./utils/listener.class").OBJECT_LISTENER_TYPE): import("./utils/listener.class").OBJECT_LISTENER_TYPE;
        };
    };
    maps: typeof MapsUtil;
};
export default nodtilus;
export declare type NODTILUS_JSON_TYPES = TYPES;
export declare type NODTILUS_JSON_TYPE_OPTIONS = TYPE_OPTIONS;
