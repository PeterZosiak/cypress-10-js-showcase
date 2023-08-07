/// <reference types="cypress" />

class ChartsPage {
  sortDropdown() {
    return cy.get('[data-testid="dropdown"');
  }

  sortDropdownItem(name) {
    return cy.get('[data-testid="dd-option"]').contains(name);
  }

  searchInput() {
    return cy.get('[data-testid="charts-search"');
  }

  chartList() {
    return this.churnListItem().parent();
  }

  churnListItem() {
    return cy.get('[data-testid="churn-list-item"]');
  }

  engagementListItem() {
    return cy.get('[data-testid="engagement-list-item"]');
  }

  monetizationListItem() {
    return cy.get('[data-testid="monetization-list-item"]');
  }

  overallGrowthListItem() {
    return cy.get('[data-testid="overall-growth-list-item"]');
  }

  progressionListItem() {
    return cy.get('[data-testid="progression-list-item"]');
  }

  retentionListItem() {
    return cy.get('[data-testid="retention-list-item"]');
  }

  userExperienceListItem() {
    return cy.get('[data-testid="user-experience-list-item"]');
  }

  searchItems(searchTerm) {
    this.searchInput().clear().type(searchTerm).wait(1000);
  }

  navigateChartPage(subpage) {
    switch (subpage) {
      case 'Overall Growth':
        this.overallGrowthListItem().click().wait(1000);
        break;

      case 'Engagement':
        this.engagementListItem().click().wait(1000);
        break;

      case 'Retention':
        this.retentionListItem().click().wait(1000);
        break;

      case 'Churn':
        this.churnListItem().click().wait(1000);
        break;

      case 'Progression':
        this.progressionListItem().click().wait(1000);
        break;

      case 'Monetization':
        this.monetizationListItem().click().wait(1000);
        break;

      case 'User Experience':
        this.userExperienceListItem().click().wait(1000);
        break;

      default:
        break;
    }
  }
}

export default new ChartsPage();
