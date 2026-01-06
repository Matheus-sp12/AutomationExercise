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

  saveProductPriceByIndex(index) {
    cy.get(".features_items .product-image-wrapper")
      .eq(index)
      .within(() => {
        cy.get("h2")
          .first()
          .invoke("text")
          .then((priceText) => {
            const price = priceText.trim();

            cy.get("@productsPrices").then((prices) => {
              prices.push(price);
            });
          });
      });
  }

  clickFirstProductAddToCart() {
    this.saveProductPriceByIndex(2);

    cy.get(".features_items .product-image-wrapper")
      .eq(2)
      .trigger("mouseover")
      .find(".overlay-content a.btn")
      .click({ force: true });
  }

  clickSecondProductAddToCart() {
    this.saveProductPriceByIndex(3);

    cy.get(".features_items .product-image-wrapper")
      .eq(3)
      .trigger("mouseover")
      .find(".overlay-content a.btn")
      .click({ force: true });
  }
  continueShopping() {
    cy.get("#cartModal button.close-modal").click();
  }

  normalizePrice(priceText) {
    const cleanText = priceText.replace(/[^\d]/g, "");
    return Number(cleanText);
  }
  validatePricesInCart() {
    cy.get("@productsPrices").then((prices) => {
      cy.get(".cart_price").each(($el, index) => {
        const cartPrice = this.normalizePrice($el.text());
        const savedPrice = this.normalizePrice(prices[index]);

        expect(cartPrice).to.eq(savedPrice);
      });
    });
  }

  quantityOfProduct() {
    cy.get("#quantity").clear().type("4").should("have.value", "4");
  }

  addToCart() {
    cy.get(".btn.btn-default.cart").click();
  }

  comparequantityInCart(expectedQuantity) {
    cy.get("td.cart_quantity button")
      .should("be.visible")
      .and("have.text", "4");
  }

  finalizeCart() {
    cy.get("#do_action a.btn").click();
  }

  buttonRegisterOrLogin() {
    cy.get("#checkoutModal u").click();
  }

  removeProductFromCart() {
    cy.get(".cart_info tbody tr")
      .first()
      .find(".cart_delete a")
      .click();
    cy.get(".cart_info tbody tr").should("have.length.lessThan", 2);
  }

  
}
export default new verifyAllProduct();
