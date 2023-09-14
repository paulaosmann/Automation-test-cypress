import { Opinion } from "../support/register/add-opinion-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Add opinion test", () => {
  const opinionForm = new Opinion();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    opinionForm.myaccountButton().click();
  });

  it("2. Go to my orders panel", () => {
    opinionForm.myOrderPanel().click();
  });

  it("3. Go into the order details", () => {
    opinionForm.myOrderPage().click();
  });

  it("4. Go to the item page", () => {
    opinionForm.productName().click();
  });

  it("6. Click opinion block", () => {
    opinionForm.opinionBlock().click();
  });

  it("6. Write an opinion", () => {
    opinionForm.opinionField().type("Super produkt. Polecam!");
  });

  it("7. Set number of stars", () => {
    opinionForm.starSet().click();
  });

  it("8. Submit an opinion", () => {
    opinionForm.opinionButtuon().click();
  });
});
