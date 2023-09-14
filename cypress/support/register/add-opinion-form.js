export class Opinion {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  myOrderPanel() {
    return cy
      .get(".woocommerce-MyAccount-navigation-link--orders > a")
      .should("be.visible");
  }

  myOrderPage() {
    return cy
      .get(":nth-child(1) > .woocommerce-orders-table__cell-order-number > a")
      .should("be.visible");
  }

  productName() {
    return cy.get(".woocommerce-table__product-name > a").should("be.visible");
  }

  opinionBlock() {
    return cy.get("#tab-title-reviews > a").should("be.visible");
  }
  starSet() {
    return cy.get(".star-5").should("be.visible");
  }

  opinionField() {
    return cy.get("#comment").should("be.visible");
  }

  opinionButtuon() {
    return cy.get("#submit");
  }
}
