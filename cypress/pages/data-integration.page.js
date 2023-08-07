/// <reference types="cypress" />
import appMenu from './components/app-menu.component'

class DataIntegration {
  tabItemHistory() {
    return cy.get('[data-testid="tab-item History"]');
  }

  tabItemGameData() {
    return cy.get('[data-testid="tab-item Game data"]');
  }

  tabItemChannels() {
    return cy.get('[data-testid="tab-item Channels"]');
  }

  tabItemGDPR() {
    return cy.get('[data-testid="tab-item GDPR"]');
  }

  tabItemCOPPA() {
    return cy.get('[data-testid="tab-item COPPA"]');
  }

  navigateTo() {
    return appMenu.navigateDataPrivacy();
  }
}

export default new DataIntegration();
