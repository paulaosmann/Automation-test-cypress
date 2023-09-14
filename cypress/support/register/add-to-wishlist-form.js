export class AddToWishlist {
  shopButton() {
    return cy.get("#menu-item-198 > a").should("be.visible");
  }

  climbButton() {
    return cy
      .get(":nth-child(2) > a > .woocommerce-loop-category__title")
      .should("be.visible");
  }

  climbItem() {
    cy.get(
      'img[class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"]'
    )
      .first()
      .click({ force: true });
  }

  addtowishlistButton() {
    return cy.get(".add_to_wishlist > span").click();
  }
}
