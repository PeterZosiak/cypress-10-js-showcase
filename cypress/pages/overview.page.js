/// <reference types="cypress" />

class OverviewPage {
  // Page objects
  notificationBar() {
    return cy.get('[data-testid="notification-bar"]');
  }
}

export default new OverviewPage();