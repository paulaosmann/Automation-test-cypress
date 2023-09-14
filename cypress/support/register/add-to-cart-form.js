export class AddToCart {
  shopButton() {
    return cy.get("#menu-item-198 > a").should("be.visible");
  }

  yogaButton() {
    return cy
      .get(".last > a > .woocommerce-loop-category__title")
      .should("be.visible");
  }

  addtocartButton() {
    return cy.get(".post-61 > .button").should("be.visible");
  }
}
