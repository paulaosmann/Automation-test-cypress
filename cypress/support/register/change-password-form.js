export class ChangePassword {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  changePasswordLink() {
    return cy
      .get(
        ".woocommerce-MyAccount-content > :nth-child(3) > [href='https://fakestore.testelka.pl/moje-konto/edytuj-konto/']"
      )
      .should("be.visible");
  }

  typeName() {
    return cy.get("#account_first_name");
  }

  typeLastName() {
    return cy.get("#account_last_name");
  }

  oldPassword() {
    return cy.get("#password_current");
  }

  newPassword() {
    return cy.get("#password_1");
  }

  newPassword2() {
    return cy.get("#password_2");
  }

  saveButton() {
    return cy.get(".woocommerce-Button");
  }

  passwordMessage() {
    return cy
      .get(".woocommerce-message")
      .should("have.text", "\n\t\tZmieniono szczegóły konta.\t");
  }
}
