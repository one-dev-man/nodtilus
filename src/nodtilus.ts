import ArraysUtil from "./utils/arraysutil";
import Await from "./utils/await";
import FilesUtil from "./utils/filesutil";
import { JsonTypeChecker, TYPES, TYPE_OPTIONS } from "./utils/jsontypechecker";
import { Listener, StaticListener, ObjectListener } from "./utils/listener.class";
import MapsUtil from "./utils/mapsutil";

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