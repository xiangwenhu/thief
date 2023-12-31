import { Browser, PuppeteerLaunchOptions, launch } from "puppeteer";
import Activity from "../activities/Activity";
import SequenceActivity from "../activities/Sequence";
import { IActivityExecuteParams, IActivityRunParams } from "../types/activity";

export default class BrowserActivity<
    C = any,
    R = any
> extends SequenceActivity<C, R> {

    #browser: Browser | undefined = undefined;

    get browser() {
        return this.#browser;
    }

    buildTask() {
        return this.task = async (paramObj: IActivityExecuteParams) => {
            try {
                const options = this.getReplacedOptions(paramObj);
                this.#browser = await launch(options);
                const superTask = super.buildTask();
                const res = await superTask.call(this, paramObj);
                return res;
            } catch (err) {
                throw this.createActivityError(err)
            } finally {
                if (!!this.#browser && this.#browser.connected) {
                    await this.#browser.close();
                }
            }
        }
    }
}
