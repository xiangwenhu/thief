import { PuppeteerLaunchOptions } from "puppeteer";
import Activity from "../crawlActivities/GetCookie"
import { ActivityFactoryFactory, IActivityProps } from "../types/activity";

export interface IBrowserActivityProps<C = any> extends IActivityProps<C> {
    options: PuppeteerLaunchOptions;
}

export default (_factory: ActivityFactoryFactory) =>
    <C = any, GC = any>(props: IBrowserActivityProps<C>, globalContext: GC) => {
        const activity = new Activity(props.context)
        activity.name = props.name || activity.name;
        activity.globalCtx = globalContext || {};
        activity.build();
        return activity
    }