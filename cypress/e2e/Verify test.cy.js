import { Verify } from "../support/register/verify-order-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Verify order test", () => {
  const verifyOrderForm = new Verify();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    verifyOrderForm.myaccountButton().click();
  });

  it("2. Go to my order panel", () => {
    verifyOrderForm.myOrderPanel().click();
  });

  it("3. Check if order in progress", () => {
    verifyOrderForm.realisationMessage().click();
  });
});
