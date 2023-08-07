/* eslint-disable max-len */
import assementAutomationPage from '../../pages/assessment-automation.page';
import homePage from '../../pages/home.page';

describe('Assessment Automation page', () => {
  const { baseUrl } = Cypress.config();
  const gameName = 'TestAut game';
  const firstLevelGenre = 'Action-Adventure';
  const secondLevelGenre = 'Action-adventure platformer';
  const audienceReach = 'Closed beta';
  const dau = '1K - 10K';
  const platforms = 'iOS';
  const logo = 'Company_logo.png';
  const rewardTxt = 'This REWARD is awesome!';
  const deeplinkTxt = 'test://test.deep.link';

  beforeEach(() => {
    cy.cssDisableMotion();
    cy.login('/assessment-automation');
  });

  it('should open Assessment Automation page and process visual page validation', () => {
    cy.url({ timeout: 10000 }).should('eq', `${baseUrl}/assessment-automation`);
    cy.contains('Welcome e2e!');
    cy.contains('Ready to meet your players?');
    cy.contains('Identify the psychological needs of the people playing your game by launching the Assessment.');
    cy.visualRegressionSnapshot('Assessment Automation - Game Step');
  });

  // this step will fail locally but works on staging, it seems to be a local env caching issue for the survey - search - api, maybe I saw a 401 error...
  it('should open Assessment Automation page, add Game name and process visual page validation', () => {
    assementAutomationPage.addGameName(gameName);
    assementAutomationPage.gameNameInput().should('have.value', gameName);

    assementAutomationPage.progressBar().should('be.visible');
    cy.visualRegressionSnapshot('Assessment Automation - Game Step - input');
  });

  it('should open Assessment Automation page, add Game genre and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);

    cy.contains('Tell us a bit about your game');
    cy.contains('You know your game best! Select the 1-3 genres and sub-genres that best represent your game.');

    assementAutomationPage.progressBar().should('be.visible');

    assementAutomationPage.genreInput().click();
    cy.visualRegressionSnapshot('Assessment Automation - Genre Step - dropdown');

    assementAutomationPage.addGameGenre(firstLevelGenre, secondLevelGenre);
    assementAutomationPage.genreInput().contains(secondLevelGenre);
    cy.visualRegressionSnapshot('Assessment Automation - Genre Step');

    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 16%;');
  });

  it('should open Assessment Automation page, add Audience, add Reach range, select Platforms and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);
    assementAutomationPage.passGameGenreStep(firstLevelGenre, secondLevelGenre);

    assementAutomationPage.addAudienceReach(audienceReach);
    assementAutomationPage.addDAU(dau);
    assementAutomationPage.addPlatforms(platforms);

    assementAutomationPage.audienceReachInput().should('have.value', audienceReach);
    assementAutomationPage.dauRangeInput().should('have.value', dau);
    assementAutomationPage.platformsInputWrapper().contains(platforms);
    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 32%;');

    cy.visualRegressionSnapshot('Assessment Automation - ReachOf Step');
  });

  it('should open Assessment Automation page, add Brand logo and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);
    assementAutomationPage.passGameGenreStep(firstLevelGenre, secondLevelGenre);
    assementAutomationPage.passGameAudienceStep(audienceReach, dau, platforms);

    assementAutomationPage.logoInput().attachFile(logo);

    cy.visualRegressionSnapshot('Assessment Automation - Upload Step');
    assementAutomationPage.logo().should('exist');
    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 49%;');
  });

  it('should open Assessment Automation page, add Reward and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);
    assementAutomationPage.passGameGenreStep(firstLevelGenre, secondLevelGenre);
    assementAutomationPage.passGameAudienceStep(audienceReach, dau, platforms);
    assementAutomationPage.passBrandStep(logo);

    assementAutomationPage.rewardInput().type(rewardTxt);
    assementAutomationPage.bestPracticesAccordion().click();

    cy.contains('Best practices for how to best incentivize your players to take the assessment.');
    cy.visualRegressionSnapshot('Assessment Automation - Reward Step');

    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 66%;');
  });

  it('should open Assessment Automation page, add Delivery reward and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);
    assementAutomationPage.passGameGenreStep(firstLevelGenre, secondLevelGenre);
    assementAutomationPage.passGameAudienceStep(audienceReach, dau, platforms);
    assementAutomationPage.passBrandStep(logo);
    assementAutomationPage.passRewardStep(rewardTxt);

    assementAutomationPage.apiBtn().click();
    cy.visualRegressionSnapshot('Assessment Automation - Delivery Method Step - API tab');

    assementAutomationPage.deeplinkBtn().click();
    cy.contains('Tips for setting up your deep link').click();

    assementAutomationPage.deeplinkInput().type(deeplinkTxt);
    assementAutomationPage.deeplinkInput().should('have.value', deeplinkTxt);
    cy.visualRegressionSnapshot('Assessment Automation - Delivery Method Step');
    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 83%;');
  });

  it('should open Assessment Automation page, add Final comments and process visual page validation', () => {
    assementAutomationPage.passGameToAccessStep(gameName);
    assementAutomationPage.passGameGenreStep(firstLevelGenre, secondLevelGenre);
    assementAutomationPage.passGameAudienceStep(audienceReach, dau, platforms);
    assementAutomationPage.passBrandStep(logo);
    assementAutomationPage.passRewardStep(rewardTxt);
    assementAutomationPage.passDeliveryStep(deeplinkTxt);

    assementAutomationPage.commentsTxtArea().type('testing some text');
    cy.visualRegressionSnapshot('Assessment Automation - Final Step');
    assementAutomationPage.progressBarFill().should('have.attr', 'style', 'width: 99%;');
  });

  it('should be able to First time user experience messages and process visual validation each of them', () => {
    assementAutomationPage.createAssessmentDraft(gameName, firstLevelGenre, secondLevelGenre, audienceReach, dau, platforms, logo, rewardTxt, deeplinkTxt);
    window.localStorage.setItem('assessmentFTUEStep', 0);
    cy.visit('/home');
    cy.contains('Here you can see the status of the assessment.');
    cy.visualRegressionSnapshot('Assessment Automation - FTUEStep 1');

    assementAutomationPage.ftueBtn().click();
    cy.contains('In the menu, you can see your unique API key');
    cy.visualRegressionSnapshot('Assessment Automation - FTUEStep 2');

    assementAutomationPage.ftueBtn().click();
    cy.contains('Finally, users can be added in your account settings');
    cy.visualRegressionSnapshot('Assessment Automation - FTUEStep 3');
    assementAutomationPage.ftueBtn().click();
  });

  it('should contains Assessment draft on Dashboard page and process visual page validation of element', () => {
    assementAutomationPage.createAssessmentDraft(gameName, firstLevelGenre, secondLevelGenre, audienceReach, dau, platforms, logo, rewardTxt, deeplinkTxt);
    window.localStorage.setItem('assessmentFTUEStep', 3);
    homePage.visit();

    homePage.assessmentHistory().should('exist');
    homePage.assessmentHistory().contains(gameName);
    homePage.assessmentHistory().visualRegressionSnapshotElement('Assessment Automation - dash');
  });

  it('should be able to edit existing Assessment draft', () => {
    assementAutomationPage.createAssessmentDraft(gameName, firstLevelGenre, secondLevelGenre, audienceReach, dau, platforms, logo, rewardTxt, deeplinkTxt);
    window.localStorage.setItem('assessmentFTUEStep', 3);
    homePage.visit();

    assementAutomationPage.openAssessment(gameName);
    cy.url({ timeout: 10000 }).should('contain', 'assessment-automation');
  });

  afterEach(() => {
    assementAutomationPage.deleteAssessment(gameName);
  });
});
