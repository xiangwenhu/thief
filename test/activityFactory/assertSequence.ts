
import { IActivityProps } from './../../src/types/activity';
import createActivity from "../../src/factory/activity"

const activityProps: IActivityProps = {
    type: 'assertSequence',
    name: '如果ctx.count小于5，加加',
    context: {
        count: 1
    },
    assert: 'ctx.count < 5',
    children: [{
        type: 'code',
        name: 'count加1',
        code: 'parent.ctx.count++'
    }, {
        type: 'delay',
        name: '睡500ms',
        timeout: 1500
    }, {
        type: 'code',
        name: '输出count',
        code: 'console.log("count:" + parent.ctx.count)'
    }]
}

const activity = createActivity(activityProps);

activity.run();