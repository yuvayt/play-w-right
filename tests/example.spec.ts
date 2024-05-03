import { expect, test } from "../fixtures/page-fixture";

test("", async ({ bookStorePage }) => {
    await bookStorePage.goto();

    await bookStorePage.searchBook("abc");
});
