import { Locator } from "@playwright/test";

export default interface IElement {
    locator: Locator;

    getLocator(): Locator;

    fill(value: string): Promise<void>;

    all(): Promise<IElement[]>;

    allInnerTexts(): Promise<string[]>;

    click(): Promise<void>;

    isVisible(): Promise<void>;
}
