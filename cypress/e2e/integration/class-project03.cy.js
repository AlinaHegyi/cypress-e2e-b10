/// <reference types="cypress"/>

import BasePageWikipedia from "../../pages/BasePageWikipedia";

const basePageWikipedia = new BasePageWikipedia();

describe("Class-Practice 03", () => {
  beforeEach(() => {
    cy.visit("https://www.wikipedia.org/");

    cy.fixture("example").then(function (data) {
      (this.logo = data.logo),
        (this.slogan = data.slogan),
        (this.topLanguage = data.topLanguage)
    });
  });

  /**
 * 1.Go to https://www.wikipedia.org/ 
2.Validate that the logo is displayed, and its text is "Wikipedia"
3.Validate that the slogan is displayed, and its text is "The Free Encyclopedia"
 */
  it("TASK-1: Validate the Wikipedia Logo and Slogan", function () {
    basePageWikipedia.getLogoWikipedia().should("contain.text", this.logo);
    basePageWikipedia.getSloganText().should("contain.text", this.slogan);
  });

  /**
         * 1.Go to https://www.wikipedia.org/ 
2.Validate that there are top ten languages are displayed
3.Validate that the top language is "English"
         */
  it("Validate the Wikipedia Top Ten Languages", function () {
    basePageWikipedia.getTopTenLanguages().each(($el) => {
      cy.wrap($el).should("be.visible");
    });

    basePageWikipedia.getTopTenLanguages().first().should("have.text", "English");
  });

  /**
 * 1.Go to https://www.wikipedia.org/ 
2.Search for "Cypress" in the search bar
3.Validate that "Cypress" is displayed in the title of the new page
4.Validate that "Cypress" is displayed in the url of the new page
5.Validate that "Cypress" is displayed in the main heading of the page
 */
  it("Validate the Wikipedia Search Results", () => {
    basePageWikipedia
      .clickSearchInput().type('Cypress{enter}')
      .url().should('include', 'Cypress')
      .title().should("include", "Cypress")
    basePageWikipedia.getH1CypressHeader().should("contain.text", "Cypress");
  });

  /**
 * TASK-4: Validate the Wikipedia Article Numbers for All Languages
1.Go to https://www.wikipedia.org/ 
2.Click on "Read Wikipedia in your language" button
3.Validate that there are 19 languages have over 1,000,000 articles
4.Validate that there are 54 languages have over 100,000 articles
5.Validate that there are 100 languages have over 10,000 articles
6.Validate that there are 132 languages have over 1,000 articles
7.Validate that there are 28 languages have over 100 articles
 */
 
    it("Validate the Wikipedia Article Numbers for All Languages", () => {
        const arr = [19, 54, 100, 132, 28]
        cy.get('#js-lang-list-button').click()
        for(let i = 0; i <= 4; i++) {
            cy.get('.langlist').eq(i).find('a').should('have.length', arr[i])
        }
    })
  });

