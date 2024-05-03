import { test as base } from "../core/fixture/base-fixture";
import { BookStorePage } from "../pages/book-store-page";

type testType = {
    bookStorePage: BookStorePage;
};

export const test = base.extend<testType>({
    bookStorePage: async ({}, use) => {
        await use(new BookStorePage());
    },
});

export { expect } from "../core/fixture/base-fixture";
