import { Locator } from "@playwright/test";
import IElement from "./interface";
import Element from "./element";
import BrowserManagement from "../browser/browser-management";

export class ElementBySelector extends Element implements IElement {
    public constructor(
        private readonly _selector: string,
        private readonly _options?: {
            has?: Locator;
            hasNot?: Locator;
            hasNotText?: string | RegExp;
            hasText?: string | RegExp;
        }
    ) {
        super();
    }

    public override getLocator(): Locator {
        if (this.locator != undefined) {
            return this.locator;
        }

        this.locator = BrowserManagement.page.locator(
            this._selector,
            this._options
        );

        return this.locator;
    }
}
