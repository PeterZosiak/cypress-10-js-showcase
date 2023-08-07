import { qase } from 'cypress-qase-reporter/dist/mocha';
import conversationThreadsPage from '../../pages/conversation-threads.page';

describe('Conversation Threads', () => {
  beforeEach(() => {
    cy.login('/home');
    cy.visit(`/${Cypress.env('gameDefault').slug}/conversation-threads`);
  });

  qase(184, it('should contains all Conversation threads elements', () => {
    conversationThreadsPage.pageTitle().should('be.visible');
    conversationThreadsPage.backBtn().should('be.visible');
    conversationThreadsPage.personaFilterBtn().should('be.visible');
    conversationThreadsPage.dateFilterBtn().should('be.visible');
    conversationThreadsPage.channelFilterBtn().should('be.visible');
    conversationThreadsPage.searchBtnDropdown().should('be.visible');
    conversationThreadsPage.sortDropdown().should('be.visible');
    conversationThreadsPage.pageCommentsCountTitle().should('be.visible');

    conversationThreadsPage.pageScoreWidgetInformativeness().should('be.visible');
    conversationThreadsPage.pageScoreWidgetInformativenessTitle().should('be.visible');
    conversationThreadsPage.pageScoreWidgetInformativenessScore().should('be.visible');
    conversationThreadsPage.pageScoreWidgetInformativenessGlossary().should('be.visible');

    conversationThreadsPage.pageScoreWidgetSentiment().should('be.visible');
    conversationThreadsPage.pageScoreWidgetSentimentTitle().should('be.visible');
    conversationThreadsPage.pageScoreWidgetSentimentScore().should('be.visible');
    conversationThreadsPage.pageScoreWidgetSentimentGlossary().should('be.visible');

    conversationThreadsPage.commentWrapper().should('be.visible');
    conversationThreadsPage.commentContent().should('be.visible');
    conversationThreadsPage.commentComment().should('be.visible');
    conversationThreadsPage.commentIcon().should('be.visible');
    conversationThreadsPage.commentDate().should('be.visible');

    conversationThreadsPage.commentInformativeness().should('be.visible');
    conversationThreadsPage.commentInformativenessScore().should('be.visible');
    conversationThreadsPage.comentSentiment().should('be.visible');
    conversationThreadsPage.commentSentimentScore().should('be.visible');
  }));
});