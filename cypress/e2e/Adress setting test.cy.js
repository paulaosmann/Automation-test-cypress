import { Adress } from "../support/register/adress-form";
import { baseUrl, adresData } from "../support/register/authorization-config";

describe("Adres setting test", () => {
  const adressForm = new Adress();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    adressForm.myaccountButton().click();
  });

  it("2. Go to adress panel", () => {
    adressForm.adressPanel().click();
  });

  it("3. Click the edit button", () => {
    adressForm.editadressButton().click();
  });

  it("4. Set the data", () => {
    adressForm.setName().type(adresData.name);
    adressForm.setLastName().type(adresData.lastName);
    adressForm.setCountry();
    adressForm.setStreet().type(adresData.street);
    adressForm.setPostCode().type(adresData.postCode);
    adressForm.setCity().type(adresData.city);

    adressForm.submitSaveButton().click();
    cy.request("https://fakestore.testelka.pl/moje-konto/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
