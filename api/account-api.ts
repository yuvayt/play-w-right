import { APIRequestOptionsBuilder } from "../core/api/api-request-options";
import { APIClient } from "../core/api/api-client";
import { APIResponse } from "@playwright/test";

export type Account = { userName: string; password: string };

export class AccountAPI {
    public static async login(
        request: APIClient,
        url: string,
        data: Account
    ): Promise<APIResponse> {
        const options = new APIRequestOptionsBuilder().addData(data).build();

        return await request.post(url, options);
    }

    public static async generateToken(
        request: APIClient,
        url: string,
        data: Account
    ): Promise<APIResponse> {
        const options = new APIRequestOptionsBuilder().addData(data).build();

        return await request.post(url, options);
    }
}
