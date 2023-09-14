import { Order } from "../support/register/order-item-form";
import { baseUrl, adresData } from "../support/register/authorization-config";

describe("Order item test", () => {
  const orderForm = new Order();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    orderForm.orderBlock().click();
  });

  it("2. Set the data", () => {
    orderForm.setBillingName().type("{selectall}{del}").type(adresData.name);
    orderForm
      .setBillingLastName()
      .type("{selectall}{del}")
      .type(adresData.lastName);
    orderForm
      .setBillingStreet()
      .type("{selectall}{del}")
      .type(adresData.street);
    orderForm
      .setBillingPostCode()
      .type("{selectall}{del}")
      .type(adresData.postCode);
    orderForm.setBillingCity().type("{selectall}{del}").type(adresData.city);
    orderForm.setBillingPhone().type("{selectall}{del}").type("123456789");
  });

  it("3. Fill the card data", () => {
    cy.fillOutCreditCardForm({
      number: "4242424242424242",
      date: "12/24",
      cvc: "123",
    });
  });

  it("4. Accept rules items", () => {
    orderForm.acceptRulesButton().click();
  });

  it("5. Order items", () => {
    orderForm.orderButton().click();
  });
});
