import { APIRequestOptions } from "./types";

export class APIRequestOptionsBuilder {
    private _options: APIRequestOptions;

    constructor() {
        this._options = {};
    }

    public build(): APIRequestOptions {
        return this._options;
    }

    public addBearerAuthorizationHeader(token: string) {
        if (this._options.headers === undefined) {
            this._options.headers = {};
        }

        this._options.headers["Authorization"] = `Bearer ${token}`;

        return this;
    }

    public addData(data: any) {
        this._options.data = data;

        return this;
    }
}
