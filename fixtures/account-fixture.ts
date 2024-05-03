import { test as base } from "./page-fixture";
import { BookStorePage } from "../pages/book-store-page";
import { ProfilePage } from "../pages/profile-page";

type AccountFixtureType = {
    user: BookStorePage;
    profilePage: ProfilePage;
};

export const test = base.extend<AccountFixtureType>({
    bookStorePage: async ({}, use) => {
        await use(new BookStorePage());
    },
    profilePage: async ({}, use) => {
        await use(new ProfilePage());
    },
});

export { expect } from "./page-fixture";
