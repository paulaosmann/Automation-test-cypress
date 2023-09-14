import { RegisterForm } from "../support/register/register-form";
import { baseUrl, login } from "../support/register/authorization-config";

describe("User register test", () => {
  const registerForm = new RegisterForm();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    registerForm.registerBlock().click();
  });

  it("2. Register an account", () => {
    registerForm.emailInputRegister().type(login.username);
    registerForm.passwordInputRegister().type(login.password);
    registerForm.submitRegisterButton().click();
    cy.request("https://fakestore.testelka.pl/moje-konto/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
