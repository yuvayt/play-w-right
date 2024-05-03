import { expect, test } from "../../../fixtures/page-fixture";
import { delete_book as data } from "../../../data/pages/profile-page.json";
import BrowserManagement from "../../../core/browser/browser-management";
import {
    LOGIN_PAGE_ENDPOINT,
    PROFILE_PAGE_ENDPOINT,
} from "../../../constants/page-endpoints";
import { AddBookData, BookStoreAPI } from "../../../api/book-store-api";
import {
    BOOK_STORE_API_ENDPOINT,
    GENERATE_TOKEN_API_ENDPOINT,
    LOGIN_API_ENDPOINT,
} from "../../../constants/api-endpoints";
import { Account, AccountAPI } from "../../../api/account-api";
import { PASSWORD, USERNAME } from "../../../constants/account";
import { ADDED_ISBN_CODE, CREATED_CODE } from "../../../constants/status-code";

test.beforeEach(async ({ apiClient }) => {
    const account: Account = {
        userName: USERNAME,
        password: PASSWORD,
    };

    const generateTokenResponse = await AccountAPI.generateToken(
        apiClient,
        GENERATE_TOKEN_API_ENDPOINT,
        account
    );

    expect(generateTokenResponse.ok()).toBeTruthy();

    const { token } = await generateTokenResponse.json();

    const loginResponse = await AccountAPI.login(
        apiClient,
        LOGIN_API_ENDPOINT,
        account
    );

    expect(loginResponse.ok()).toBeTruthy();

    const { userId } = await loginResponse.json();

    const addBookData: AddBookData = {
        userId: userId,
        collectionOfIsbns: data.isbns,
    };

    const addBookResponse = await BookStoreAPI.addBook(
        apiClient,
        BOOK_STORE_API_ENDPOINT,
        token,
        addBookData
    );

    if (addBookResponse.ok()) {
        expect(addBookResponse.status()).toEqual(CREATED_CODE);
    } else {
        const { code } = await addBookResponse.json();
        expect(code).toEqual(ADDED_ISBN_CODE);
    }
});

test("Delete added book in collection", async ({ loginPage, profilePage }) => {
    await loginPage.goto();

    expect(BrowserManagement.page).toHaveURL(LOGIN_PAGE_ENDPOINT);

    loginPage.login(USERNAME, PASSWORD);

    expect(BrowserManagement.page).toHaveURL(PROFILE_PAGE_ENDPOINT);

    await profilePage.searchBook(data.book_title);

    var book = profilePage.getBook(data.book_title);

    expect(book.isVisible()).toBeTruthy();

    BrowserManagement.page.on("dialog", async (dialog) => {
        expect(dialog).toEqual(data.delete_message);

        await dialog.accept();

        expect(book.isVisible()).toBeFalsy();
    });

    await profilePage.deleteBook(data.book_title);
});
