import { DeleteItem } from "../support/register/delete-item-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Adres setting test", () => {
  const deleteItemForm = new DeleteItem();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    deleteItemForm.cartButton().click();
  });

  it("2. Delete item from cart", () => {
    deleteItemForm.deleteitemButton().as("btn").click({ multiple: true });
  });
  it("3. Verify delete mesage", () => {
    deleteItemForm.deleteMessage();
  });
});
