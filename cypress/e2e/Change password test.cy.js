import { ChangePassword } from "../support/register/change-password-form";
import {
  baseUrl,
  login,
  adresData,
} from "../support/register/authorization-config";

describe("Change password test", () => {
  const changePassForm = new ChangePassword();

  it("1. Visit page", () => {
    cy.visit(baseUrl.url);
    changePassForm.myaccountButton().click();
  });

  it("2. Go to change password field", () => {
    changePassForm.changePasswordLink().click();
  });

  it("3. Type name", () => {
    changePassForm.typeName().type(adresData.name);
  });

  it("4. Type last name", () => {
    changePassForm.typeLastName().type(adresData.lastName);
  });

  it("5. Type old password", () => {
    changePassForm.oldPassword().type(login.password);
  });

  it("6. Type new password", () => {
    changePassForm.newPassword().type(login.newpassword);
  });

  it("7. Type new password again", () => {
    changePassForm.newPassword2().type(login.newpassword);
  });

  it("8. Save settings", () => {
    changePassForm.saveButton().click();
  });

  it("9. Password Message ", () => {
    changePassForm.passwordMessage();
  });
});
