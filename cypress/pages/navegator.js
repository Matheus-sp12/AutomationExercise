class navegator {
  clickFirstLinkBrand() {
    cy.get('a[href="/brand_products/Polo"] span.pull-right').click();
    cy.get("h2.title").should("have.text", "Brand - Polo Products");
  }

  clickSecondLinkBrand() {
    cy.get('a[href="/brand_products/H&M"]').click();
    cy.get("h2.title").should("have.text", "Brand - H&M Products");
  }
}

export default new navegator();
