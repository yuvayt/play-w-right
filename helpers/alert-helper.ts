import BrowserManagement from "../core/browser/browser-management";

export class AlertHelper {
    public static acceptAlert(expect) {
        BrowserManagement.page.on("dialog", async (dialog) => {
            expect(dialog);

            await dialog.accept();
        });
    }
}
