/// <reference types="cypress" />

class HeaderMenuComponent {
  profileMenuBtn() {
    return cy.get('[data-testid="navigator-profile"]');
  }

  profileMenuDD() {
    return cy.get('[data-testid="navigator-profile-dropdown"]');
  }

  accountSettingsBtn() {
    return this.profileMenuDD().find('button').eq(0);
  }

  logoutBtn() {
    return this.profileMenuDD().find('button').eq(1);
  }

  logout() {
    cy.visit('/home').wait(1000);
    cy.url().then(($url) => {
      if (!$url.includes('/login') && !$url.includes('/forgot-pass')) {
        this.profileMenuBtn().click();
        this.logoutBtn().click();
      }
      else {
        cy.log('User is already logged out');
      }
    });
  }

  visitAccountSettings() {
    this.profileMenuBtn().should('be.visible');
    this.profileMenuBtn().click();
    this.accountSettingsBtn().click();
  }
}

export default new HeaderMenuComponent();