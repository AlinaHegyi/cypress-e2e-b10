import TablesPage from "../../pages/TablesPage";

describe("Static Tables", { tags: '@smoke' }, () => {
  const tablesPage = new TablesPage();

  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("Tables");
    cy.fixture("example").then(function (data) {
      this.headers = data.headers;
    });
  });

  /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */
  it("Verify the ehaders of the table",{ tags: '@table' }, () => {
    tablesPage.getCompanyTableHeaders().each(function ($el, index) {
      cy.wrap($el).should("have.text", this.headers[index]);
    });
  });
});





