class correctLogin {
  clickLoginEmail(emailCorrect) {
    cy.get(".login-form")
      .find('[data-qa="login-email"]')
      .type(emailCorrect);
  }

  clickLoginPassword(passwordCorrect) {
    cy.get(".login-form").find('[data-qa="login-password"]').type(passwordCorrect);
  }

  clickButtonLogin() {
    cy.get(".login-form").find('[data-qa="login-button"]').click();
  }

  verifyLoggedInUser() {
    cy.get("i.fa-user").should("exist").and("be.visible");
  }

  verifyLoggedOutUser() {
   cy.get(".login-form")
      .find('[data-qa="login-email"]').should('be.visible');
}

  verifymessageIncorrectLogin() {
    cy.get(".login-form")
      .find("p")
      .should("contain.text", "Your email or password is incorrect!");
  }

  clickLogout() {
    cy.get('a[href="/logout"]').click();
  }

  verifyMessageEmailExists() {
    cy.get(".signup-form")
      .find("p")
      .should("contain.text", "Email Address already exist!");
  }

}
export default new correctLogin();
