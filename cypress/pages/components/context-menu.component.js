/// <reference types="cypress" />

class ContextMenuComponent {
  contextMenu() {
    return cy.get('[data-testid="context-wrapper"]');
  }

  headerTitle() {
    return this.contextMenu().find('[data-testid="header-title"]');
  }

  headerSubtitle() {
    return this.contextMenu().find('[data-testid="header-subtitle"]');
  }

  headerScore() {
    return this.contextMenu().find('[data-testid="header-score"]');
  }

  headerScoreValue() {
    return this.headerScore().find('[data-testid="score-value"]');
  }

  headerScoreTitle() {
    return this.headerScore().find('[data-testid="score-title"]');
  }

  headerChart() {
    return this.headerScore().find('[class^="_circle_"]').eq(1);
  }

  headerChartValue() {
    return this.contextMenu().find('[data-testid="roundchart-percent"]');
  }

  contextContent() {
    return this.contextMenu().find('[data-testid="content"]');
  }

  sectionTitleDefinition() {
    return this.contextContent().find('[data-testid="section-title"]').eq(0);
  }

  sectionContentDefinition() {
    return this.contextContent().find('[data-testid="section-content"]').eq(0);
  }

  sectionTitleDeepDive() {
    return this.contextContent().find('[data-testid="section-title"]').eq(1);
  }

  sectionContentDeepDive() {
    return this.contextContent().find('[data-testid="section-content"]').eq(1);
  }

  contextFooter() {
    return this.contextMenu().find('[data-testid="footer"]');
  }

  footerLabel() {
    return this.contextFooter().find('[data-testid="footer-label"]');
  }

  deepDiveBtn() {
    return this.contextMenu().find('[data-testid="button"]');
  }
}

export default new ContextMenuComponent();
