import ArraysUtil from "./utils/arrays";
import Await from "./utils/await";
import FilesUtil from "./utils/files";
import { JsonTypeChecker, TYPES, TYPE_OPTIONS } from "./utils/jsontypechecker";
import { Listener, StaticListener, ObjectListener } from "./utils/listener.class";
import MapsUtil from "./utils/maps";

const nodtilus = {
    arrays: ArraysUtil,
    await: Await,
    files: FilesUtil,
    json: {
        types: {
            check: JsonTypeChecker
        }
    },
    listener: {
        class: Listener,
        static: StaticListener,
        object: ObjectListener
    },
    maps: MapsUtil
};

export default nodtilus;

export type NODTILUS_JSON_TYPES = TYPES;
export type NODTILUS_JSON_TYPE_OPTIONS = TYPE_OPTIONS;