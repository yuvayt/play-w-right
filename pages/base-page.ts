import { HOME_PAGE_ENDPOINT } from "../constants/page-endpoints";
import BrowserManagement from "../core/browser/browser-management";

export class BasePage {
    constructor() {}

    public async goto() {
        return await BrowserManagement.page.goto(HOME_PAGE_ENDPOINT);
    }
}
