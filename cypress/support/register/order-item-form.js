export class Order {
  orderBlock() {
    return cy.get("#menu-item-199 > a").should("be.visible");
  }

  setBillingName() {
    return cy.get("#billing_first_name").should("be.visible");
  }

  setBillingLastName() {
    return cy.get("#billing_last_name").should("be.visible");
  }

  setBillingStreet() {
    return cy.get("#billing_address_1").should("be.visible");
  }

  setBillingPostCode() {
    return cy.get("#billing_postcode").should("be.visible");
  }

  setBillingCity() {
    return cy.get("#billing_city").should("be.visible");
  }

  setBillingPhone() {
    return cy.get("#billing_phone").should("be.visible");
  }

  setCardNumber() {
    return cy.get("#stripe-card-element");
  }

  termsButton() {
    return cy.get("#terms").should("be.visible");
  }

  acceptRulesButton() {
    return cy.get("#terms").should("be.visible");
  }

  orderButton() {
    return cy.get("#place_order").should("be.visible");
  }
}
