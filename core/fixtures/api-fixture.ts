import { test as base } from "./base-fixture";
import { APIClient } from "../api/api-client";

export const test = base.extend<{ apiClient: APIClient }>({
    apiClient: [
        async ({ request }, use) => {
            await use(new APIClient(request));
        },
        {
            scope: "test",
            auto: true,
        },
    ],
});

export { expect } from "./base-fixture";
