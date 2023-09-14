import { Logout } from "../support/register/logout-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Logout test", () => {
  const logoutForm = new Logout();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    logoutForm.myaccountButton().click();
  });

  it("2. Logout", () => {
    logoutForm.logoutButon().click();
  });
});
