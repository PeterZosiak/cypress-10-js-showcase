/// <reference types="cypress" />

class PersonaFilterComponent {
  personaFilterToogler() {
    return cy.get('[data-testid="open-personas-filter-btn"');
  }

  selectSegmentDropdown() {
    return cy.get('[data-testid="single-select-open"]');
  }

  selectSegmentDropdownWrapper() {
    return cy.get('[data-testid="single-select-open"]').parent();
  }

  showEntirePopulationBtn() {
    return cy.get('[data-testid="show-entire-population-btn"]');
  }

  personaBtsWrapper() {
    return cy.get('[data-testid^="_select-cluster--options"]');
  }

  personaAllPlayersBtn() {
    return cy.get('[data-testid="select-all-cluster-btn"]');
  }

  persona1Btn() {
    return cy.get('[data-testid="select-0-cluster-btn"]');
  }

  persona2Btn() {
    return cy.get('[data-testid="select-1-cluster-btn"]');
  }

  persona3Btn() {
    return cy.get('[data-testid="select-2-cluster-btn"]');
  }

  persona4Btn() {
    return cy.get('[data-testid="select-3-cluster-btn"]');
  }

  persona5Btn() {
    return cy.get('[data-testid="select-4-cluster-btn"]');
  }

  persona6Btn() {
    return cy.get('[data-testid="select-5-cluster-btn"]');
  }

  personasFilterWrapper() {
    return cy.get('[class^="_select-cluster--wrapper"]');
  }

  segmentOptionsDropdownExpanded() {
    return cy.get('[data-testid="single-select-option"]').first().parent();
  }

  segmentAudienceOptBtn(audience) {
    return cy.get('[data-testid="single-select-option"]').contains(audience).parent();
  }

  selectAudience(audience) {
    this.selectSegmentDropdown().click();
    this.segmentAudienceOptBtn(audience).click();
  }

  clearFilterBtn() {
    return cy.get('[data-testid="clear-filters-btn"]');
  }
}

export default new PersonaFilterComponent();