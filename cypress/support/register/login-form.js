export class Login {
  loginButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  usernameInput() {
    return cy.get("#username").should("be.visible");
  }

  passwordInput() {
    return cy.get("#password").should("be.visible");
  }

  submitLoginButton(number) {
    return cy
      .get(":nth-child(" + number + ") > .woocommerce-button")
      .should("be.visible");
  }
}
