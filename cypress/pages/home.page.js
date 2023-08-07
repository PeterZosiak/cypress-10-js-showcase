/// <reference types="cypress" />

class HomePage {
  gameListItem(name) {
    return cy.get('[data-testid="game-list-item"]').contains(name);
  }

  searchInputBtn() {
    return cy.get('[data-testid="search-input-wrapper"]', { timeout: 15000 });
  }

  searchInput() {
    return cy.get('[data-testid="search-input"]');
  }

  assessmentHistory() {
    return cy.get('[data-testid="hist-list"]');
  }

  productsContainer() {
    return cy.get('[data-testid="items-view-container"]');
  }

  nameSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(0);
  }

  viewedSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(1);
  }

  revenueSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(2);
  }

  hcsSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(3);
  }

  ltvSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(2);
  }

  pcsSortTab() {
    return cy.get('[data-testid="sort-tab"]').eq(3);
  }

  settingsBtn() {
    return cy.get('[data-testid="homepage-settings-toggle"]');
  }

  settingsViewOptionList() {
    return cy.get('[data-testid="homepage-settings-item-list"]');
  }

  settingsViewOptionCard() {
    return cy.get('[data-testid="homepage-settings-item-carousel"]');
  }

  addNewProductBtnList() {
    return cy.get('[role="button"]').contains("Ask us to add a new product");
  }

  assessNewGameBtn() {
    return cy.get('[role="button"]').contains("Assess a new game");
  }

  addNewProductBtnCard() {
    return cy.get('[data-testid="add-item Ask us to add a new product"');
  }

  addNewAudienceBtnCard() {
    return cy.get('[data-testid="add-item [object Object]"');
  }

  addNewAudienceBtnList() {
    return cy.get('[role="button"]').contains("Ask us to craft a custom audience");
  }

  traitsTab() {
    return cy.get('[data-testid="tab-item Traits"]');
  }

  navigatorTab() {
    return cy.get('[data-testid="tab-item Navigator"]');
  }

  switchProductView(view) {
    this.settingsBtn().click();
    switch (view) {
      case 'list':
        this.settingsViewOptionList().click();
        break;
      case 'card':
        this.settingsViewOptionCard().click();
        break;
    }
    this.settingsBtn().click();
  }

  navigateToGame(name) {
    this.searchInputBtn().click();
    this.searchInput().type(name);
    this.gameListItem(name).click().wait(1000);
  }

  switchTab(tab) {
    switch (tab) {
      case 'Traits':
        this.traitsTab().click();
        break;
      case 'Navigator':
        this.navigatorTab().click();
        break;
    }
  }

  visit() {
    return cy.visit('/home');
  }
}

export default new HomePage();
