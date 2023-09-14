import { AddToWishlist } from "../support/register/add-to-wishlist-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Add to cart test", () => {
  const addtowishlistForm = new AddToWishlist();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    addtowishlistForm.climbButton().click();
  });

  it("2. Choose a group of items", () => {
    addtowishlistForm.climbItem();
  });

  it("3. Add to wishlist", () => {
    addtowishlistForm.addtowishlistButton();
    cy.request("https://fakestore.testelka.pl/moje-konto/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
