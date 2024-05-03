import { ElementBySelector } from "../core/elements/element-by-selector";
import IElement from "../core/elements/interface";
import { BasePage } from "./base-page";
import { LOGIN_PAGE_ENDPOINT } from "../constants/page-endpoints";
import { Response } from "@playwright/test";
import BrowserManagement from "../core/browser/browser-management";

export class LoginPage extends BasePage {
    private readonly _txtUsername: IElement;
    private readonly _txtPassword: IElement;
    private readonly _btnLogin: IElement;

    public constructor() {
        super();
        this._txtUsername = new ElementBySelector("input[id='userName']");
        this._txtPassword = new ElementBySelector("input[id='password']");
        this._txtPassword = new ElementBySelector("button[id='login']");
    }

    public override async goto(): Promise<Response | null> {
        return await BrowserManagement.page.goto(LOGIN_PAGE_ENDPOINT);
    }

    public async login(username: string, password: string): Promise<void> {
        await this._txtUsername.fill(username);
        await this._txtPassword.fill(password);
        await this._btnLogin.click();
    }
}
