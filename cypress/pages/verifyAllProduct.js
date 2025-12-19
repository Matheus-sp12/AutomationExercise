class verifyAllProduct {
  clickLinkProducts() {
    cy.get('#header a[href="/products"]').click();
    cy.get("div.features_items").should("be.visible");
  }

  viewDetailProduct() {
    cy.get("div.features_items")
      .find('a[href="/product_details/1"]')
      .first()
      .click();
    cy.get("div.product-information").should("be.visible");
  }

  searchProductWinerTop() {
    cy.get('[name="search"]').click();
    cy.get('[name="search"]').type("Winter Top");
    cy.get("#submit_search").click();
    cy.get("div.features_items").should("be.visible");
  }

  subsribeToNewsletter(email) {
    cy.get("#footer").scrollIntoView();
    cy.get("#susbscribe_email").type(email);
    cy.get("#subscribe").click();
    cy.get("#success-subscribe").should(
      "contain.text",
      "You have been successfully subscribed!"
    );
  }

  clickToCart() {
    cy.get('#header a[href="/view_cart"]').click();
    cy.get("div.cart_info").should("be.visible");
  }
}

export default new verifyAllProduct();
