import { APIRequestOptionsBuilder } from "../core/api/api-request-options";
import { APIClient } from "../core/api/api-client";
import { APIResponse } from "@playwright/test";

export type AddBookData = {
    userId: string;
    collectionOfIsbns: string[];
};

export class BookStoreAPI {
    public static async addBook(
        request: APIClient,
        url: string,
        token: string,
        data: AddBookData
    ): Promise<APIResponse> {
        const options = new APIRequestOptionsBuilder()
            .addBearerAuthorizationHeader(token)
            .addData(data)
            .build();

        return await request.post(url, options);
    }
}
