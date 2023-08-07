/// <reference types="cypress" />

class PersonaCard {
  personaCard() {
    return cy.get('[data-testid="persona-card-with-selectors"]');
  }

  personaInfo() {
    return this.personaCard().find('[data-testid="persona-info"]');
  }

  personaInfoTabTraits() {
    return this.personaInfo().find('[data-testid="tab-item Traits"]');
  }

  personaInfoTabUXMetrics() {
    return this.personaInfo().find('[data-testid="tab-item UX Metrics"]');
  }

  personaInfoTabTopActions() {
    return this.personaInfo().find('[data-testid="tab-item Top Actions"]');
  }

  personaInfoTabExperience() {
    return this.personaInfo().find('[data-testid="tab-item Experience"]');
  }

  score() {
    return this.personaCard().find('[data-test="score"]');
  }

  scoreBtn() {
    return this.score().parentsUntil('button');
  }

  scoreInfoBtn() {
    return this.personaCard().find('[data-test="score-info"]');
  }
}

export default new PersonaCard();
