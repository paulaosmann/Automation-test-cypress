import { Search } from "../support/register/searching-form";
import { baseUrl } from "../support/register/authorization-config";

describe("Search and add to cart test", () => {
  const searchingForm = new Search();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    searchingForm.searchButton().click();
  });

  it("2. Search for an item", () => {
    searchingForm.itemInput();
  });

  it("3. Add to cart ", () => {
    searchingForm.addButton().click();
  });
});
