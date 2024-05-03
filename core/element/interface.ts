import { Locator } from "@playwright/test";

export default interface IElement {
    locator: Locator;

    getLocator(): Locator;

    fill(value: string): Promise<void>;

    all(): Promise<Locator[]>;
}
