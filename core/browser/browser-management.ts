import { Browser, BrowserContext, Page } from "@playwright/test";

export default class BrowserManagement {
    public static browser: Browser;
    public static context: BrowserContext;
    public static page: Page;

    public static init(browser: Browser, context: BrowserContext, page: Page) {
        BrowserManagement.browser = browser;
        BrowserManagement.context = context;
        BrowserManagement.page = page;
    }
}
