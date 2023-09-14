export class DeleteItem {
  cartButton() {
    return cy.get("#menu-item-200 > a").should("be.visible");
  }

  deleteitemButton() {
    return cy.get(".remove").should("be.visible");
  }

  deleteMessage() {
    return cy
      .get(".woocommerce-message")
      .should(
        "have.text",
        "\n\t\tUsunięto: „Wakacje z yogą w Kraju Kwitnącej Wiśni“. Cofnij?\t"
      );
  }
}
