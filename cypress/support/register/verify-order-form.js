export class Verify {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  myOrderPanel() {
    return cy
      .get(".woocommerce-MyAccount-navigation-link--orders > a")
      .should("be.visible");
  }

  realisationMessage() {
    return cy
      .get(":nth-child(1) > .woocommerce-orders-table__cell-order-status")
      .should(
        "have.text",
        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tW trakcie realizacji\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
      );
  }
}
