/// <reference types="cypress" />

class GlossaryComponent {
  modal() {
    return cy.get('[data-testid="overlay-content"]');
  }

  closeBtn() {
    return cy.get('[data-testid="overlay-close"]').find('button');
  }

  title() {
    return cy.get('[data-testid="modal-title"]');
  }

  definitionTitle() {
    return cy.get('[data-testid="definition-title"]');
  }

  definition() {
    return cy.get('[data-testid="content-definition"]');
  }

  content() {
    return cy.get('[data-testid="modal-content"]');
  }

  header() {
    return cy.get('[data-testid="modal-header"]');
  }

  footer() {
    return cy.get('[data-testid="definition-footnote"]');
  }
}

export default new GlossaryComponent();
