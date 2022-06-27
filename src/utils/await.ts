export default class Await {

    static async validContenxt(filter: () => boolean, cb?: () => void) {
        return await (() => {
            return new Promise((resolve, reject) => {
                let itv = setInterval(() => {
                    if(filter()) {
                        clearInterval(itv);
                        cb ? setTimeout(cb) : null;
                        resolve(true);
                    }
                });
            });
        })();
    }
    
}