/// <reference types="cypress" />

class ConversationThreadsPage {
  pageTitle() {
    return cy.get('[data-testid="page-title"]');
  }

  backBtn() {
    return cy.get('[data-testid="page-back-button"]');
  }

  pageCommentsCountTitle() {
    return cy.get('[data-testid="page-showing-title"]');
  }

  pageScoreWidgetInformativeness() {
    return cy.get('[data-testid="page-score-widget-informativeness"]');
  }

  pageScoreWidgetInformativenessTitle() {
    return cy.get('[data-testid="page-score-widget-informativeness-title"]');
  }

  pageScoreWidgetInformativenessScore() {
    return cy.get('[data-testid="page-score-widget-informativeness-score"]');
  }

  pageScoreWidgetInformativenessGlossary() {
    return this.pageScoreWidgetInformativeness().find('[data-testid="dictionary-open"]');
  }

  pageScoreWidgetSentiment() {
    return cy.get('[data-testid="page-score-widget-sentiment"]');
  }

  pageScoreWidgetSentimentTitle() {
    return cy.get('[data-testid="page-score-widget-sentiment-title"]');
  }

  pageScoreWidgetSentimentScore() {
    return cy.get('[data-testid="page-score-widget-sentiment-score"]');
  }

  pageScoreWidgetSentimentGlossary() {
    return this.pageScoreWidgetSentiment().find('[data-testid="dictionary-open"]');
  }

  commentWrapper() {
    return cy.get('[data-testid="list-item-wrapper"]');
  }

  commentContent() {
    return cy.get('[data-testid="list-item-content"]');
  }

  commentComment() {
    return cy.get('[data-testid="list-item-comment"]');
  }

  commentIcon() {
    return cy.get('[data-testid="list-item-icon"]');
  }

  commentDate() {
    return cy.get('[data-testid="list-item-date"]');
  }

  commentPersonasTitle() {
    return cy.get('[data-testid="list-item-personas-title"]');
  }

  commentInformativeness() {
    return cy.get('[data-testid="list-item-informativeness"]');
  }

  commentInformativenessScore() {
    return cy.get('[data-testid="list-item-informativeness-score"]');
  }

  comentSentiment() {
    return cy.get('[data-testid="list-item-sentiment"]');
  }

  commentSentimentScore() {
    return cy.get('[data-testid="list-item-sentiment-score"]');
  }

  personaFilterBtn() {
    return cy.get('[data-testid="selector-button"]').eq(0);
  }

  dateFilterBtn() {
    return cy.get('[data-testid="selector-button"]').eq(1);
  }

  channelFilterBtn() {
    return cy.get('[data-testid="selector-button"]').eq(2);
  }

  searchBtnDropdown() {
    return cy.get('[class^="_search-button_"]').eq(0);
  }

  sortDropdown() {
    return cy.get('[data-testid="dropdown"]');
  }

}

export default new ConversationThreadsPage();
