export class RemoveItem {
  wishlistButton() {
    return cy
      .get(".menu-item-248 > a")
      .first()
      .should(($a) => {
        $a.attr("target", "_self");
      })
      .click();
  }

  removeButton() {
    return cy.get("div > .remove").should("be.visible");
  }

  removeMessage() {
    return cy
      .get(".woocommerce-message")
      .should("have.text", "\n\t\t﻿Produkt został usunięty.\t");
  }
}
