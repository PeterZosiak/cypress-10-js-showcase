/// <reference types="cypress" />

class SidebarGameMenu {
  sidebarGameMenu() {
    return cy.get('[data-testid="games-menu"]');
  }

  overviewBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Overview');
  }

  chartsBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Charts');
  }

  personasBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Personas');
  }

  qualitysBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Qualitys');
  }

  actionsBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Actions');
  }

  targetBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Target');
  }

  jurneyBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Journey');
  }

  compareBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Compare');
  }

  clusterBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Cluster');
  }

  researchBtn() {
    return this.sidebarGameMenu().find('[data-testid="menu-item"]').contains('Research');
  }

  navigate(name) {
    switch (name) {
      case 'Overview':
        this.overviewBtn().click();
        break;
      case 'Charts':
        this.chartsBtn().click();
        break;
      case 'Personas':
        this.personasBtn().click();
        break;
      case 'Qualitys':
        this.qualitysBtn().click();
        break;
      case 'Actions':
        this.actionsBtn().click();
        break;
      case 'Target':
        this.targetBtn().click();
        break;
      case 'Journey':
        this.jurneyBtn().click();
        break;
      case 'Compare':
        this.compareBtn().click();
        break;
      case 'Cluster':
        this.clusterBtn().click();
        break;
      case 'Research':
        this.researchBtn().click();
        break;
      default:
        break;
    }
  }
}

export default new SidebarGameMenu();