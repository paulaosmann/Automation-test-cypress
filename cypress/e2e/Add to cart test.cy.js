import { AddToCart } from "../support/register/add-to-cart-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Add to cart test", () => {
  const addtocartForm = new AddToCart();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    addtocartForm.addtocartButton().click();
  });

  it("2. Choose a group of items", () => {
    addtocartForm.yogaButton().click();
  });

  it("3. Add to cart", () => {
    addtocartForm.addtocartButton().click();
    cy.request("https://fakestore.testelka.pl/moje-konto/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
