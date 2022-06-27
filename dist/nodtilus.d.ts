import ArraysUtil from "./utils/arraysutil";
import Await from "./utils/await";
import FilesUtil from "./utils/filesutil";
import { JsonTypeChecker } from "./utils/jsontypechecker";
import { Listener, StaticListener } from "./utils/listener.class";
import MapsUtil from "./utils/mapsutil";
declare const nodtilus: {
    arrays: typeof ArraysUtil;
    await: typeof Await;
    files: typeof FilesUtil;
    json: {
        type: {
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
