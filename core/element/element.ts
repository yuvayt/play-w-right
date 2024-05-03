import { Locator } from "@playwright/test";
import IElement from "./interface";

export default class Element implements IElement {
    locator: Locator;

    protected constructor() {}

    public getLocator(): Locator {
        throw new Error("Method not implemented.");
    }

    public async fill(value: string): Promise<void> {
        await this.getLocator().fill(value);
    }

    public async all(): Promise<Locator[]> {
        return this.getLocator().all();
    }
}
