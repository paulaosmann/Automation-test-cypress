import { DeleteAccount } from "../support/register/delete-account-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Delete account test", () => {
  const deleteAccountForm = new DeleteAccount();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    deleteAccountForm.myaccountButton().click();
  });

  it("2. Delete an account", () => {
    deleteAccountForm.DeleteAccountButon().click();
  });
});
