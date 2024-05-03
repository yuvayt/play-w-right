import { ElementBySelector } from "../core/elements/element-by-selector";
import IElement from "../core/elements/interface";
import { BasePage } from "./base-page";
import { PROFILE_PAGE_ENDPOINT } from "../constants/page-endpoints";
import { Response } from "@playwright/test";
import BrowserManagement from "../core/browser/browser-management";

export class ProfilePage extends BasePage {
    private readonly _txtSearchBook: IElement;
    private readonly _btnDelete: (bookTitle: string) => IElement;
    private readonly _btnOkToDeleteBook: IElement;
    private readonly _cellBook: (bookTitle: string) => IElement;

    public constructor() {
        super();
        this._txtSearchBook = new ElementBySelector("input[id='searchBox']");
        this._btnDelete = (bookTitle: string) =>
            new ElementBySelector(
                `xpath=//span[@id='see-book-${bookTitle}']/ancestor::div[@role='row']//span[@id='delete-record-undefined']`
            );
        this._btnOkToDeleteBook = new ElementBySelector(
            "button[id='closeSmallModal-ok']"
        );
        this._cellBook = (bookTitle: string) =>
            new ElementBySelector(`span[id='see-book-${bookTitle}']`);
    }

    public override async goto(): Promise<Response | null> {
        return await BrowserManagement.page.goto(PROFILE_PAGE_ENDPOINT);
    }

    public async searchBook(text: string): Promise<void> {
        await this._txtSearchBook.fill(text);
    }

    public async deleteBook(bookTitle: string): Promise<void> {
        await this._btnDelete(bookTitle).click();

        await this._btnOkToDeleteBook.click();
    }

    public getBook(bookTitle: string): IElement {
        return this._cellBook(bookTitle);
    }
}
