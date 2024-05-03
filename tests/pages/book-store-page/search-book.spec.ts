import { expect, test } from "../../../fixtures/page-fixture";
import { search_book as data } from "../../../data/pages/book-store-page.json";
import BrowserManagement from "../../../core/browser/browser-management";
import { BOOK_STORE_PAGE_ENDPOINT } from "../../../constants/page-endpoints";

test.describe("Search book with multiple results", async () => {
    test.beforeEach(async ({ bookStorePage }) => {
        await bookStorePage.goto();

        expect(BrowserManagement.page).toHaveURL(BOOK_STORE_PAGE_ENDPOINT);
    });

    for (const text of data.search_texts) {
        test(`Search book by "${text}" and verify all books`, async ({
            bookStorePage,
        }) => {
            for (const text of data.search_texts) {
                await bookStorePage.searchBook(text);

                const bookTitles = await bookStorePage.getAllBookTitles();

                for (const title of bookTitles) {
                    await expect(title.getLocator()).toContainText(text, {
                        ignoreCase: true,
                        useInnerText: true,
                    });
                }
            }
        });
    }
});
