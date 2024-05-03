import { APIRequestContext, APIResponse } from "@playwright/test";
import { APIRequestOptions } from "./types";

export class APIClient {
    private _request: APIRequestContext;

    public constructor(request: APIRequestContext) {
        this._request = request;
    }

    public async get(
        url: string,
        options?: APIRequestOptions
    ): Promise<APIResponse> {
        return await this._request.get(url, options);
    }

    public async post(
        url: string,
        options?: APIRequestOptions
    ): Promise<APIResponse> {
        return await this._request.post(url, options);
    }

    public async put(
        url: string,
        options?: APIRequestOptions
    ): Promise<APIResponse> {
        return await this._request.put(url, options);
    }

    public async delete(
        url: string,
        options?: APIRequestOptions
    ): Promise<APIResponse> {
        return await this._request.delete(url, options);
    }
}
