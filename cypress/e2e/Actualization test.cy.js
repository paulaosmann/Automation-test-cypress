import { Actualization } from "../support/register/cart-actualization-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Actualize number of items", () => {
  const actualizationForm = new Actualization();

  it("1. Visit pages", () => {
    cy.visit(baseUrl.url);
    actualizationForm.cartButton().click();
  });

  it("2. Change number of item", () => {
    actualizationForm.quantityField().type("{selectall}{del}").type("3");
  });

  it("3. Click the actualize button", () => {
    actualizationForm.actualizeButton().click();
  });
});
