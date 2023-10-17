import { ActivityError } from "../ActivityError";
import Activity from "./Activity";
import AssertActivity from "./Assert";
import SequenceActivity from "./Sequence";

export default class AssertSequenceActivity<
    C = any,
    R = any
> extends SequenceActivity<C, R>{

    constructor(context: C, children: Activity[]) {
        super(context, children)
    }

    accessor assert: AssertActivity | null = null;

    async run(ctx: C, preRes: any = undefined, ...otherParams: any[]) {
        if (!this.assert) {
            throw new ActivityError("assert未定义", this);
        }
        const res = await this.assert.run(ctx, preRes, ...otherParams);
        if (!res) {
            return preRes;
        }
        return super.run(ctx, preRes, ...otherParams);
    }
}