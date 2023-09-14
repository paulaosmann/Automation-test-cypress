import { RemoveItem } from "../support/register/remove-item-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Adres setting test", () => {
  const removeitemForm = new RemoveItem();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    removeitemForm.wishlistButton();
  });

  it("2. Remove item from wishlist", () => {
    removeitemForm.removeButton().click();
  });

  it("3. Verify remove mesage", () => {
    removeitemForm.removeMessage();
  });
});
