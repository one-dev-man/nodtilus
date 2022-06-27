"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Await {
    static async validContenxt(filter, cb) {
        return await (() => {
            return new Promise((resolve, reject) => {
                let itv = setInterval(() => {
                    if (filter()) {
                        clearInterval(itv);
                        cb ? setTimeout(cb) : null;
                        resolve(true);
                    }
                });
            });
        })();
    }
}
exports.default = Await;
