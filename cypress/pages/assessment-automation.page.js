/// <reference types="cypress" />
import homePage from './home.page';

class AssementAutomationPage {

  closeAssementBtn() {
    return cy.get('[data-testid="progress-bar"] [class^="close"]');
  }

  gameNameInput() {
    return cy.get('input[name="game-name"]');
  }

  startedBtn() {
    return cy.get('[data-testid="1-step-container"] [data-testid="next-button"]').contains('Get started').parent();
  }

  nextGenreBtn() {
    return cy.get('[data-testid="2-step-container"] [data-testid="next-button"]').contains('Next').parent();
  }

  nextAudienceBtn() {
    return cy.get('[data-testid="3-step-container"] [data-testid="next-button"]').contains('Next').parent();
  }

  nextBrandBtn() {
    return cy.get('[data-testid="4-step-container"] [data-testid="next-button"]').contains('Next').parent();
  }

  nextRewardBtn() {
    return cy.get('[data-testid="5-step-container"] [data-testid="next-button"]').contains('Next').parent();
  }

  nextDeliveryBtn() {
    return cy.get('[data-testid="6-step-container"] [data-testid="next-button"]').contains('Next').parent();
  }

  progressBar() {
    return cy.get('[data-testid="progress-bar"]');
  }

  progressBarFill() {
    return cy.get('[class^="_progress-filled"]');
  }

  genreInput() {
    return cy.get('[data-testid="searchable-dropdown"]');
  }

  audienceReachInput() {
    return cy.get('[name="audience-reach"]');
  }

  dauRangeInput() {
    return cy.get('[name="DAU"]');
  }

  platformsInput() {
    return cy.get('[name="platforms"]');
  }

  platformsInputWrapper() {
    return cy.get('[data-testid="survey-input-wrapper platforms"]');
  }

  audienceTitle() {
    return cy.contains('Who has access to your game?');
  }

  logoInput() {
    return cy.get('[name="upload-logo"]');
  }

  logo() {
    return cy.get('[class^="_client-logo"]');
  }

  rewardInput() {
    return cy.get('[name="reward"]');
  }

  bestPracticesAccordion() {
    return cy.contains('Best practices');
  }

  rewardText() {
    return cy.get('[data-testid="reward-print-out"]');
  }

  apiBtn() {
    return cy.get('[data-testid="api"');
  }

  deeplinkBtn() {
    return cy.get('[data-testid="deeplink"]');
  }

  deeplinkInput() {
    return cy.get('[name="deep-link"]');
  }

  commentsTxtArea() {
    return cy.get('[data-testid="7-step-container"] textarea');
  }

  ftueBtn() {
    return cy.get('[data-testid="global-btn"]').contains('Next');
  }

  addGameName(gameName) {
    this.gameNameInput().clear().type(gameName);
    cy.contains(gameName).click();
  }

  passGameToAccessStep(gameName) {
    this.addGameName(gameName);
    this.startedBtn().click();
    cy.get('[data-testid="2-step-container"]').should('be.visible');
  }

  addGameGenre(firstLevelGenre, secondLevelGenre) {
    this.genreInput().click();
    cy.contains(firstLevelGenre).click();
    cy.contains(secondLevelGenre).click();
    cy.contains('Genre:').click();
  }

  passGameGenreStep(firstLevelGenre, secondLevelGenre) {
    this.addGameGenre(firstLevelGenre, secondLevelGenre);
    this.nextGenreBtn().click();
    cy.get('[data-testid="3-step-container"]').should('be.visible');
  }

  addAudienceReach(audienceReach) {
    this.audienceReachInput().click();
    cy.contains(audienceReach).click();
    this.audienceTitle().click();
  }

  addDAU(dau) {
    this.dauRangeInput().click();
    cy.contains(dau).click();
    this.audienceTitle().click();
  }

  addPlatforms(platforms) {
    this.platformsInput().click();
    cy.contains(platforms).click();
    this.audienceTitle().click();
  }

  passGameAudienceStep(audienceReach, dau, platforms) {
    this.addAudienceReach(audienceReach);
    this.addDAU(dau);
    this.addPlatforms(platforms);
    this.nextAudienceBtn().click();
    cy.get('[data-testid="4-step-container"]').should('be.visible');
  }

  passBrandStep() {
    this.logoInput().attachFile('Company_logo.png');
    this.nextBrandBtn().click();
    cy.get('[data-testid="5-step-container"]').should('be.visible');
  }

  passRewardStep(reward) {
    this.rewardInput().type(reward);
    this.nextRewardBtn().click();
    cy.get('[data-testid="6-step-container"]').should('be.visible');
  }

  passDeliveryStep(deeplinkTxt) {
    this.deeplinkBtn().click();
    this.deeplinkInput().type(deeplinkTxt);
    this.nextDeliveryBtn().click();
    cy.get('[data-testid="7-step-container"]').should('be.visible');
  }

  createAssessmentDraft(gameName, firstLevelGenre, secondLevelGenre, audienceReach, dau, platforms, logo, reward, deeplinkTxt) {
    this.passGameToAccessStep(gameName);
    this.passGameGenreStep(firstLevelGenre, secondLevelGenre);
    this.passGameAudienceStep(audienceReach, dau, platforms);
    this.passBrandStep(logo);
    this.passRewardStep(reward);
    this.passDeliveryStep(deeplinkTxt);
  }

  openAssessment(gameName) {
    cy.get(`[data-testid="${gameName}-list-item list-item"]`).click();
  }


  deleteAssessment(gameName) {
    let el = `[data-testid="${gameName}-list-item list-item"]`;
    window.localStorage.setItem('assessmentFTUEStep', 3);
    cy.visit('/home');
    // Explicit waiting because Assessment list should be loaded or not existing
    //todo remove wait better way
    homePage.productsContainer().should('be.visible').wait(7000);

    cy.get('body').then($body => {
      if ($body.find(el).length > 0) {
        cy.get(el).realHover('mouse');
        cy.get(`${el} [data-testid="dots-wrap"] button`).should('be.visible').click();
        cy.get(`${el} [data-testid="dots-wrap"]`).contains('Delete').click();
        cy.get(el).should('not.exist');
      }
    });
  }

}

export default new AssementAutomationPage;