import ArraysUtil from "./utils/arraysutil";
import Await from "./utils/await";
import FilesUtil from "./utils/filesutil";
import { JsonTypeChecker } from "./utils/jsontypechecker";
import { Listener, StaticListener, ObjectListener } from "./utils/listener.class";
import MapsUtil from "./utils/mapsutil";

const nodtilus = {
    arrays: ArraysUtil,
    await: Await,
    files: FilesUtil,
    json: {
        type: {
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