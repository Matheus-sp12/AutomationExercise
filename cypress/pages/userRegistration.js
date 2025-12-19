class userRegistration {
  validateHome() {
    cy.url().should("eq", "https://automationexercise.com/");
  }

  clickSignUpLogin() {
    cy.get("a[href='/login']").click();
    cy.get(".signup-form").should("be.visible");
  }

  clickUserRegisterName() {
    cy.get('[data-qa="signup-name"]').click();
    cy.get('[data-qa="signup-name"]').type("vinicius silva");
  }
  clickUserRegisterEmail() {
    const email = `viniciusteste_${Date.now()}@gmail.com`;

    cy.wrap(email).as("generatedEmail");

    cy.get(".signup-form").find('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  clickEmailNewUser(email) {
    cy.get(".signup-form").find('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  clickUserRegisterTitle() {
    cy.get("#id_gender1").click();
  }

  clickUserRegisterPassword() {
    cy.get('[data-qa="password"]').type("Teste1234");
  }

  clickUserRegisterDateOfBirth() {
    cy.get('[data-qa="days"]').select("5");
    cy.get('[data-qa="months"]').select("4");
    cy.get('[data-qa="years"]').select("1991");
  }

  clickUserRegisterFirstName() {
    cy.get('[data-qa="first_name"]').type("vini");
    cy.get('[data-qa="last_name"]').type("silva");
  }

  clickUserRegisterCompany() {
    cy.get('[data-qa="company"]').type("NorteMKT");
  }

  clickUserRegisterAddress() {
    cy.get('[data-qa="address"]').type("simone martini");
    cy.get('[data-qa="state"]').type("teste");
    cy.get('[data-qa="city"]').type("teste");
    cy.get('[data-qa="zipcode"]').type("06028110");
    cy.get('[data-qa="mobile_number"]').type("11986427140");
  }

  clickUserRegisterSubmit() {
    cy.get('[data-qa="create-account"]').click();
  }

  ValidateSucessfulAccountCreation() {
    cy.get('[data-qa="account-created"] b').should("be.visible");
  }

  clickContinueButton() {
    cy.get('[data-qa="continue-button"]').click();
    cy.get("i.fa-user").should("exist").and("be.visible");
  }

  deleteAccount() {
    cy.get('#header a[href="/delete_account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('#header a[href="/login"]').should("be.visible");
  }
}

export default new userRegistration();
