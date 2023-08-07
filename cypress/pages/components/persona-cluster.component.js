/// <reference types="cypress" />

class PersonaClusterComponent {
  cluster() {
    return cy.get('[class^="_cluster-wrapper_"]');
  }

  arcTitle() {
    return this.cluster().find('[data-testid="arc-title"]');
  }

  pcsTooltip() {
    return this.cluster().find('[data-testid="pcs-tooltip"]');
  }
}

export default new PersonaClusterComponent();
