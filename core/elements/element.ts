import { Locator } from "@playwright/test";
import IElement from "./interface";

export default class Element implements IElement {
    locator: Locator;

    protected constructor() {}

    public getLocator(): Locator {
        return this.locator;
    }

    public async fill(value: string): Promise<void> {
        await this.getLocator().fill(value);
    }

    public async all(): Promise<IElement[]> {
        const locators = await this.getLocator().all();

        return locators.map((l) => {
            const element = new Element();

            element.locator = l;

            return element;
        });
    }

    public async allInnerTexts(): Promise<string[]> {
        return await this.getLocator().allInnerTexts();
    }

    public async click(): Promise<void> {
        await this.getLocator().click();
    }

    public async isVisible(): Promise<void> {
        await this.getLocator().isVisible();
    }
}
