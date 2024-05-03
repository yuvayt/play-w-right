import { Locator } from "@playwright/test";
import IElement from "./interface";
import BrowserManagement from "../browser/browser-management";
import Element from "./element";

export class ElementByPlaceholder extends Element implements IElement {
    public constructor(
        private readonly _text: string | RegExp,
        private readonly _options?: {
            exact?: boolean;
        }
    ) {
        super();
    }

    public override getLocator(): Locator {
        if (this.locator != undefined) {
            return this.locator;
        }

        this.locator = BrowserManagement.page.getByPlaceholder(
            this._text,
            this._options
        );

        return this.locator;
    }
}
