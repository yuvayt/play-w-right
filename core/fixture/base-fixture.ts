import { test as base } from "@playwright/test";
import BrowserManagement from "../browser/browser-management";

export const test = base.extend<{ browserFixture: void }>({
    browserFixture: [
        async ({ browser, context, page }, use) => {
            BrowserManagement.init(browser, context, page);
            await use();
        },
        {
            scope: "test",
            auto: true,
        },
    ],
});

export { expect } from "@playwright/test";
