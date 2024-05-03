import { test as base } from "../core/fixtures/api-fixture";
import { BookStorePage } from "../pages/book-store-page";
import { LoginPage } from "../pages/login-page";
import { ProfilePage } from "../pages/profile-page";

type PageFixtureType = {
    bookStorePage: BookStorePage;
    loginPage: LoginPage;
    profilePage: ProfilePage;
};

export const test = base.extend<PageFixtureType>({
    bookStorePage: async ({}, use) => {
        await use(new BookStorePage());
    },
    loginPage: async ({}, use) => {
        await use(new LoginPage());
    },
    profilePage: async ({}, use) => {
        await use(new ProfilePage());
    },
});

export { expect } from "../core/fixtures/api-fixture";
