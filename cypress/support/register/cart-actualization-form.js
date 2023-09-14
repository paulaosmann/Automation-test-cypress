export class Actualization {
  cartButton() {
    return cy.get("#menu-item-200 > a").should("be.visible");
  }

  quantityField() {
    return cy
      .get(".woocommerce-cart-form__cart-item > .product-quantity")
      .should("be.visible");
  }

  actualizeButton() {
    return cy.get("[name='update_cart']").first().should("be.visible");
  }
}
