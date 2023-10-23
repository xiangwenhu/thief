import { Mode, ObjectEncodingOptions, OpenMode } from "fs";
import fsp from "fs/promises";
import { isPlainObject } from "lodash";
import { IActivityExecuteParams } from "../../types/activity";
import { ensureDir } from "../../util/fs";
import Activity from "../Activity";

export interface WriteFileActivityOptions {
    dist: string;
    content: any;
    options?:
        | (ObjectEncodingOptions & {
              mode?: Mode | undefined;
              flag?: OpenMode | undefined;
          })
        | BufferEncoding
        | null;
}

export default class WriteFileActivity<C = any> extends Activity<
    C,
    string,
    WriteFileActivityOptions
> {
    buildTask() {
        return async (paramObj: IActivityExecuteParams) => {
            const { dist, content, options } = this.options;
            const rDist = this.replaceVariable(dist, paramObj) as string;
            const rContent = this.replaceVariable(content, paramObj) as any;
            const data = isPlainObject(rContent)
                ? JSON.stringify(rContent, undefined, "\t")
                : rContent;

            await ensureDir(rDist);

            return fsp.writeFile(rDist, data, options);
        };
    }
}
