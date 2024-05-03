import { ElementByPlaceholder } from "../core/element/element-by-placeholder";
import IElement from "../core/element/interface";
import { BasePage } from "./base-page";
import { BOOK_STORE_PAGE_ENDPOINT } from "../constants/endpoints";
import { Response } from "@playwright/test";
import BrowserManagement from "../core/browser/browser-management";

export class BookStorePage extends BasePage {
    private readonly _searchBox: IElement;

    public constructor() {
        super();
        this._searchBox = new ElementByPlaceholder("Type to search");
    }

    public override async goto(): Promise<Response | null> {
        return await BrowserManagement.page.goto("https://demoqa.com/books");
    }

    public async searchBook(text: string): Promise<void> {
        await this._searchBox.fill(text);
    }
}
