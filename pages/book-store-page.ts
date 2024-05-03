import { ElementByPlaceholder } from "../core/elements/element-by-placeholder";
import { ElementBySelector } from "../core/elements/element-by-selector";
import IElement from "../core/elements/interface";
import { BasePage } from "./base-page";
import { BOOK_STORE_PAGE_ENDPOINT } from "../constants/page-endpoints";
import { Response } from "@playwright/test";
import BrowserManagement from "../core/browser/browser-management";

export class BookStorePage extends BasePage {
    private readonly _txtSearchBook: IElement;
    private readonly _locBookTitles: IElement;

    public constructor() {
        super();
        this._txtSearchBook = new ElementByPlaceholder("Type to search");
        this._locBookTitles = new ElementBySelector("span[id^='see-book']");
    }

    public override async goto(): Promise<Response | null> {
        return await BrowserManagement.page.goto(BOOK_STORE_PAGE_ENDPOINT);
    }

    public async searchBook(text: string): Promise<void> {
        await this._txtSearchBook.fill(text);
    }

    public async getAllBookTitles(): Promise<IElement[]> {
        return await this._locBookTitles.all();
    }
}
