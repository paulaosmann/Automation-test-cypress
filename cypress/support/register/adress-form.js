export class Adress {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  adressPanel() {
    return cy
      .get(".woocommerce-MyAccount-navigation-link--edit-address > a")
      .should("be.visible");
  }

  editadressButton() {
    return cy
      .get(".u-column2 > .woocommerce-Address-title > .edit")
      .should("be.visible");
  }

  setName() {
    return cy.get("#shipping_first_name").should("be.visible");
  }

  setLastName() {
    return cy.get("#shipping_last_name").should("be.visible");
  }

  setCountry() {
    return cy
      .get("select")
      .select("Polska", { force: true })
      .should("have.value", "PL");
  }

  setStreet() {
    return cy.get("#shipping_address_1").should("be.visible");
  }

  setPostCode() {
    return cy.get("#shipping_postcode").should("be.visible");
  }

  setCity() {
    return cy.get("#shipping_city").should("be.visible");
  }

  submitSaveButton() {
    return cy.get(".button").should("be.visible");
  }
}
