export class Logout {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  logoutButon() {
    return cy
      .get(".woocommerce-MyAccount-content > :nth-child(2) > a")
      .should("be.visible");
  }
}
