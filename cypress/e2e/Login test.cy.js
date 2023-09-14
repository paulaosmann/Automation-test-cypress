import { Login } from "../support/register/login-form";
import { baseUrl, login } from "../support/register/authorization-config";

describe("Successfull login to the aplication", () => {
  const loginForm = new Login();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    loginForm.loginButton().click();
  });

  it("2. Login to the account", () => {
    loginForm.usernameInput().type(login.username);
    loginForm.passwordInput().type(login.password);
    loginForm.submitLoginButton(3).click();
    cy.request("https://fakestore.testelka.pl/moje-konto/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
