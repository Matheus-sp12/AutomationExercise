class contactUs {
  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
    cy.get("#contact-page div.contact-form h2.title").should("be.visible");
  }

  clickNameofcontact() {
    cy.get('[data-qa="name"]').type("vinicius");
  }

  clickEmailofcontact() {
    cy.get('[data-qa="email"]').type("viniciusteste@gmail.com");
  }

  clicktitleOfcontact() {
    cy.get('[data-qa="subject"]').type("Reembolso");
  }

  clickmessageOfcontact() {
    cy.get('[data-qa="message"]').type(
      "Gostaria de solicitar o reembolso de alguns produtos que comprei"
    );
  }

  clickfileUploadOfcontact() {
    cy.get('#contact-us-form [name="upload_file"]').selectFile(
      "cypress/arq/ReembolsoTest.pdf"
    );
  }

  clicksubmitOfcontact() {
    cy.get('[data-qa="submit-button"]').click();
  }

  verifyMessageSuccessContact() {
    cy.get(".status.alert.alert-success")
      .should("be.visible")
      .and(
        "contain.text",
        "Success! Your details have been submitted successfully."
      );
  }
}

export default new contactUs();
