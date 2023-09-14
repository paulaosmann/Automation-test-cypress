export class RegisterForm {
  registerBlock() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  emailInputRegister() {
    return cy.get("#reg_email").should("be.visible");
  }

  passwordInputRegister() {
    return cy.get("#reg_password").should("be.visible");
  }

  submitRegisterButton() {
    return cy.get(".woocommerce-Button").should("be.visible");
  }
}
