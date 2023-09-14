export class DeleteAccount {
  myaccountButton() {
    return cy.get("#menu-item-201 > a").should("be.visible");
  }

  DeleteAccountButon() {
    return cy.get(".delete-me").should("be.visible");
  }
}
