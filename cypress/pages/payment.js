class payment {
  menssageOrder() {
    cy.get('#ordermsg [name="message"]').type("meus pedido");
  }

  buttonPlaceOrder() {
    cy.get("#cart_items a.btn").click();
  }

  cartPayment() {
    cy.get('[data-qa="name-on-card"]').type("vinicius silva");
    cy.get('[data-qa="card-number"]').type("123456789");
    cy.get('[data-qa="cvc"]').type("159");
    cy.get('[data-qa="expiry-month"]').type("28");
    cy.get('[data-qa="expiry-year"]').type("1999");
  }

  buttonPaymentConfirme() {
    cy.get('[data-qa="pay-button"]').click();
    cy.get("#form a.check_out").should("be.visible");
  }
}

export default new payment();
