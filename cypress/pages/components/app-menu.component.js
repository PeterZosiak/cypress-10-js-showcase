/// <reference types="cypress" />

class AppMenu {
  appmenu() {
    return cy.get('[data-testid="app-menu"]');
  }

  searchWrapper() {
    return this.appmenu().find('[data-testid="searchable-dropdown"]');
  }

  searchInput() {
    return this.searchWrapper().find('input');
  }

  openSearch() {
    return this.searchWrapper().click();
  }

  craftNewAudienceBtn() {
    return this.searchWrapper().find('[data-testid="global-btn"]').contains('Ask us to craft a custom audience');
  }

  discoverGenersBtn() {
    return this.searchWrapper().find('[data-testid="global-btn"]').contains('Discover Genres');
  }

  craftAudienceBtn() {
    return this.searchWrapper().find('[data-testid="global-btn"]').contains('Craft an audience');
  }

  accountBtn() {
    return this.appmenu().find('[class^="_account_"]');
  }

  profileMenu() {
    return this.appmenu().find('[data-testid="base-profile-dropdown"]');
  }

  profileMenuItemDataPrivacy() {
    return this.profileMenu().find('button').contains('Data and privacy');
  }

  profileMenuItemAudienceSettings() {
    return this.profileMenu().find('button').contains('Audience settings');
  }

  profileMenuItemLogout() {
    return this.profileMenu().find('button').contains('Log out');
  }

  navigateDataPrivacy() {
    this.accountBtn().click();
    this.profileMenuItemDataPrivacy().click();
  }
}

export default new AppMenu();
