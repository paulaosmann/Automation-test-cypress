export class Search {
  searchButton() {
    return cy.get("#woocommerce-product-search-field-0").should("be.visible");
  }

  itemInput() {
    return cy
      .get("#woocommerce-product-search-field-0")
      .type("Windsurfing{enter}");
  }

  addButton() {
    return cy.get(".post-50 > .button").should("be.visible");
  }
}
