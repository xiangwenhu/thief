import SequenceActivity from "./Sequence";
import { ActivityError } from "../ActivityError";
import { IActivityRunParams } from "../types/activity";

export interface ParallelForActivityOptions<V = any> {
    values: V[]
}

export default class ParallelForActivity<
    C = any,
    R = any
> extends SequenceActivity<C, R, ParallelForActivityOptions> {


    run(paramObj: IActivityRunParams = this.defaultTaskRunParam): Promise<any> {
        const values = this.options.values;
        return new Promise(async (resolve, reject) => {
            this.ctx = this.ctx || {};
            try {
                const ps = values!.map((item) => {
                    return super.run({
                        ...paramObj,
                        $item: item,
                    });
                });
                const res = await Promise.all(ps);
                resolve(res);
            } catch (err: any) {
                reject(new ActivityError(err && err.message, this));
            }
        });
    }
}
