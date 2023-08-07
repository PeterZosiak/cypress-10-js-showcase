import { qase } from 'cypress-qase-reporter/dist/mocha';
import impactIndicator from '../../pages/components/impact-indicator.component';
import contextMenu from '../../pages/components/context-menu.component';

describe('Impact Indicator', () => {
  beforeEach(() => {
    cy.cssDisableMotion();
    cy.clearLocalStorage();
    cy.login('/home/quality');
    cy.navigateToGame(Cypress.env('gameDefault').name);
  });

  qase(215, it('should be able to see Impact Indicator in default state', () => {

    impactIndicator.rootElement().should('be.visible');
    impactIndicator.rootElement()
      .should('have.css', 'border-radius', '8px 8px 8px 22px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)');

    impactIndicator.title().should('be.visible');
    impactIndicator.title().should('contain.text', 'Impact Indicator');
    impactIndicator.title()
      .should('have.css', 'font-size', '26px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '31px')
      .and('have.css', 'color', 'rgb(19, 61, 102)');

  }));

  qase(213, it('should be able select impact target on Impact Indicator', () => {
    impactIndicator.selectQualityFromCategory('Psychological qualitys', 'Physical activity level');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Internal cohesion');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'None available');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'None available');
  }));

  qase(211, it('should be able sort list result on Impact Indicator', () => {
    impactIndicator.searchAndSelectQuality('Usability');

    impactIndicator.sortQualitys('Lowest to highest impact');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Altruism');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Internal cohesion');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Competence');

    impactIndicator.sortQualitys('Highest to lowest impact');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Power distance');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Competence');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Internal cohesion');

    impactIndicator.sortQualitys('Negative to positive impact');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Internal cohesion');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Competence');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Power distance');

    impactIndicator.sortQualitys('Positive to negative impact');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Altruism');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Power distance');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Competence');

    impactIndicator.sortQualitys('Lowest to highest qualitys');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Altruism');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Internal cohesion');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Power distance');

    impactIndicator.sortQualitys('Highest to lowest qualitys');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Competence');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Power distance');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'Internal cohesion');

    impactIndicator.selectSettings('UX Metrics');

    impactIndicator.sortQualitys('Lowest to highest UX metrics');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Focused attention');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Aesthetics');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'None available');

    impactIndicator.sortQualitys('Highest to lowest UX metrics');
    impactIndicator.impactItemQualityName().eq(0).should('have.text', 'Aesthetics');
    impactIndicator.impactItemQualityName().eq(1).should('have.text', 'Focused attention');
    impactIndicator.impactItemQualityName().eq(2).should('have.text', 'None available');

  }));

  qase(214, it('should be able to open KPI option definition on Impact Indicator', () => {
    impactIndicator.selectQualityFromCategory('UX metrics', 'Usability');
    impactIndicator.dictionaryDefinition().should('be.visible');
    impactIndicator.dictionaryDefinition().should('have.text', 'Usability is a controlled aspect of user experience design that ensures that the product is easy to use. It includes three key components: intuitiveness, efficiency, and satisfaction.\n');
    impactIndicator.dictionaryDefinition().click();

    contextMenu.contextMenu().should('be.visible');
    contextMenu.headerTitle().should('have.text', 'Usability');
    contextMenu.contextContent().should('be.visible');
    contextMenu.contextContent().should('have.text', 'Usability is a controlled aspect of user experience design that ensures that the product is easy to use. It includes three key components: intuitiveness, efficiency, and satisfaction.\n');

  }));
});
