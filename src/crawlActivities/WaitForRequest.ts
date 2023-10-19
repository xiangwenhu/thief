import { HTTPRequest } from "puppeteer";
import PageChildActivity from "./PageChildActivity";

export default class WaitForRequestActivity<
    C = any,
    R = any
> extends PageChildActivity<C, R> {
    buildTask(urlOrPredicate: string | ((req: HTTPRequest) => boolean | Promise<boolean>), options?: { timeout?: number | undefined; } | undefined): Function {
        return this.task = (..._args: any[]) => {
            return this.page?.waitForRequest(urlOrPredicate, options)
        }
    }
}