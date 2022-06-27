import fs from "fs";
import path from "path";

export default class FilesUtil {

    static mkdirs(p: string) {
        !fs.existsSync(path.dirname(p)) ? this.mkdirs(path.dirname(p)) : null;
        !fs.existsSync(p) ? fs.mkdirSync(p) : null;
    }

    static rmrf(p: string) {
        if(fs.statSync(p).isDirectory()) {
            let fl = fs.readdirSync(p);
            for(let i = 0; i < fl.length; ++i) { this.rmrf( path.join(p, fl[i]) ) }
            fs.rmdirSync(p);
        }
        else fs.unlinkSync(p);
    }

    static delete(p: string) {
        if(fs.statSync(p).isDirectory()) {
            if(fs.readdirSync(path.dirname(p)).length == 0) {
                fs.rmdirSync(p);
            }
        }
        else {
            fs.unlinkSync(p);
            this.delete(p);
        }
    }

}