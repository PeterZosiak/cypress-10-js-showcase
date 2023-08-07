import { qase } from 'cypress-qase-reporter/dist/mocha';
import clustersPage from '../../pages/clusters.page';
import contextMenu from '../../pages/components/context-menu.component';
import sidebarGameMenu from '../../pages/components/sidebar-game-menu.component';
import impactIndicator from '../../pages/components/impact-indicator.component';
import uxMetrics from '../../pages/components/widgets/ux-metrics.widget';

describe('Context menu', () => {
  beforeEach(() => {
    cy.cssDisableMotion();
    cy.clearLocalStorage();
    cy.login('/home/trait');
    cy.navigateToGame(Cypress.env('gameDefault').name);
  });

  function validateUXMetricContextMenu(title, score, color) {
    contextMenu.contextMenu().should('be.visible');
    contextMenu.contextMenu().should('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '5px')
      .and('have.css', 'filter', 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 5px)');

    contextMenu.headerTitle().should('be.visible');
    contextMenu.headerTitle().should('have.text', title)
      .and('have.css', 'font-size', '22px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '26px')
      .and('have.css', 'color', 'rgb(19, 61, 102)');

    contextMenu.headerChartValue().should('be.visible');
    contextMenu.headerChartValue().should('have.text', score)
      .and('have.css', 'font-size', '20px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '24px');

    contextMenu.headerChart().should('have.css', 'color', color);

    contextMenu.sectionTitleDefinition().should('be.visible');
    contextMenu.sectionTitleDefinition().should('have.text', 'Definition')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '20px')
      .and('have.css', 'margin-bottom', '8px')
      .and('have.css', 'color', 'rgb(19, 61, 102)');

    contextMenu.sectionContentDefinition().should('be.visible');
    contextMenu.sectionContentDefinition()
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'line-height', '24px')
      .and('have.css', 'color', 'rgb(29, 48, 84)');

    contextMenu.sectionTitleDeepDive().should('be.visible');
    contextMenu.sectionTitleDeepDive().should('have.text', 'Deep Dive')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '20px')
      .and('have.css', 'margin-bottom', '8px')
      .and('have.css', 'color', 'rgb(19, 61, 102)');

    contextMenu.sectionContentDeepDive().should('be.visible');
    contextMenu.sectionContentDeepDive()
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'line-height', '24px')
      .and('have.css', 'color', 'rgb(29, 48, 84)');

    contextMenu.footerLabel().should('be.visible');
  }

  function validateTraitContextMenu(title, subtitle, score, scoreTitle, hasDefinition = true) {
    contextMenu.contextMenu().should('be.visible');
    contextMenu.contextMenu().should('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '5px')
      .and('have.css', 'filter', 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 5px)');

    contextMenu.headerTitle().should('be.visible');
    contextMenu.headerTitle().should('have.text', title)
      .and('have.css', 'font-size', '22px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '26px')
      .and('have.css', 'color', 'rgb(19, 61, 102)');


    contextMenu.headerSubtitle().should('be.visible');
    contextMenu.headerSubtitle().should('have.text', subtitle)
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'opacity', '0.5')
      .and('have.css', 'color', 'rgb(19, 61, 102)');

    contextMenu.headerScoreValue().should('be.visible');
    contextMenu.headerScoreValue().should('have.text', score)
      .and('have.css', 'font-size', '26px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '18px');

    contextMenu.headerScoreTitle().should('be.visible');
    contextMenu.headerScoreTitle().should('have.text', scoreTitle)
      .and('have.css', 'font-size', '11px')
      .and('have.css', 'font-weight', '600')
      .and('have.css', 'line-height', '12px')
      .and('have.css', 'color', 'rgba(19, 61, 102, 0.8)');

    if (hasDefinition) {
      contextMenu.sectionTitleDefinition().should('be.visible');
      contextMenu.sectionTitleDefinition().should('have.text', 'Definition')
        .and('have.css', 'font-size', '18px')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'line-height', '20px')
        .and('have.css', 'margin-bottom', '8px')
        .and('have.css', 'color', 'rgb(19, 61, 102)');

      contextMenu.sectionContentDefinition().should('be.visible');
      contextMenu.sectionContentDefinition()
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'line-height', '24px')
        .and('have.css', 'color', 'rgb(29, 48, 84)');

      contextMenu.sectionTitleDeepDive().should('be.visible');
      contextMenu.sectionTitleDeepDive().should('have.text', 'Acquiring players with this trait')
        .and('have.css', 'font-size', '18px')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'line-height', '20px')
        .and('have.css', 'color', 'rgb(19, 61, 102)');

      contextMenu.sectionContentDeepDive().should('be.visible');
      contextMenu.sectionContentDeepDive()
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'font-weight', '400')
        .and('have.css', 'line-height', '24px')
        .and('have.css', 'color', 'rgb(29, 48, 84)');
    }

    contextMenu.footerLabel().should('be.visible');

    contextMenu.deepDiveBtn().should('exist');
    contextMenu.deepDiveBtn().should('have.text', 'Deep Dive')
      .and('have.css', 'font-size', '12px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '14px')
      .and('have.css', 'padding', '5px 15px')
      .and('have.css', 'border-radius', '4px')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(19, 61, 102)');

  }

  qase(180, it('should be able to open UX Metric Context menu on click', () => {

    // Overview page 
    clustersPage.switchTab('Experience');
    var uxExpTab = new uxMetrics(clustersPage.experienceTab());
    uxExpTab.sliderEndurability().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Endurability.name,
      Cypress.env('uxMetrics').Endurability.score,
      Cypress.env('uxMetrics').Endurability.color);
    contextMenu.contextMenu().visualRegressionSnapshotElement('Context Menu - UX Metric - Endurability');
    uxExpTab.sliderEndurability().click();
    contextMenu.contextMenu().should('not.exist');

    uxExpTab.roundChartNovelty().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Novelty.name,
      Cypress.env('uxMetrics').Novelty.score,
      Cypress.env('uxMetrics').Novelty.color);
    uxExpTab.roundChartNovelty().click();
    contextMenu.contextMenu().should('not.exist');

    uxExpTab.roundChartAesthetics().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Aesthetics.name,
      Cypress.env('uxMetrics').Aesthetics.score,
      Cypress.env('uxMetrics').Aesthetics.color);
    uxExpTab.roundChartAesthetics().click();
    contextMenu.contextMenu().should('not.exist');

    uxExpTab.roundChartUsability().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Usability.name,
      Cypress.env('uxMetrics').Usability.score,
      Cypress.env('uxMetrics').Usability.color);
    uxExpTab.roundChartUsability().click();
    contextMenu.contextMenu().should('not.exist');

    uxExpTab.roundChartAttention().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Attention.name,
      Cypress.env('uxMetrics').Attention.score,
      Cypress.env('uxMetrics').Attention.color);
    uxExpTab.roundChartAttention().click();
    contextMenu.contextMenu().should('not.exist');

    uxExpTab.roundChartInvolvement().click();
    validateUXMetricContextMenu(
      Cypress.env('uxMetrics').Involvement.name,
      Cypress.env('uxMetrics').Involvement.score,
      Cypress.env('uxMetrics').Involvement.color);
    uxExpTab.roundChartInvolvement().click();
    contextMenu.contextMenu().should('not.exist');

    // Persona page
    sidebarGameMenu.navigate('Personas');
    clustersPage.switchTab('Experience');
    var uxMy = new uxMetrics(clustersPage.myUxMetrics());

    uxMy.sliderEndurability().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Endurability.name,
      Cypress.env('myUxMetrics').Endurability.score,
      Cypress.env('myUxMetrics').Endurability.color);
    uxMy.sliderEndurability().click();
    contextMenu.contextMenu().should('not.exist');

    uxMy.roundChartNovelty().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Novelty.name,
      Cypress.env('myUxMetrics').Novelty.score,
      Cypress.env('myUxMetrics').Novelty.color);
    uxMy.roundChartNovelty().click();
    contextMenu.contextMenu().should('not.exist');

    uxMy.roundChartAesthetics().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Aesthetics.name,
      Cypress.env('myUxMetrics').Aesthetics.score,
      Cypress.env('myUxMetrics').Aesthetics.color);
    uxMy.roundChartAesthetics().click();
    contextMenu.contextMenu().should('not.exist');

    uxMy.roundChartUsability().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Usability.name,
      Cypress.env('myUxMetrics').Usability.score,
      Cypress.env('myUxMetrics').Usability.color);
    uxMy.roundChartUsability().click();
    contextMenu.contextMenu().should('not.exist');

    uxMy.roundChartAttention().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Attention.name,
      Cypress.env('myUxMetrics').Attention.score,
      Cypress.env('myUxMetrics').Attention.color);
    uxMy.roundChartAttention().click();
    contextMenu.contextMenu().should('not.exist');

    uxMy.roundChartInvolvement().click();
    validateUXMetricContextMenu(
      Cypress.env('myUxMetrics').Involvement.name,
      Cypress.env('myUxMetrics').Involvement.score,
      Cypress.env('myUxMetrics').Involvement.color);
    uxMy.roundChartInvolvement().click();
    contextMenu.contextMenu().should('not.exist');

    clustersPage.communityScoreChart().click();
    contextMenu.contextMenu().should('be.visible');
  }));

  qase(181, it('should be able to open Trait Context menu on click', () => {
    clustersPage.switchTab('Traits');

    clustersPage.uniqueTraits().click();
    cy.get('[data-testid="unique-traits"]').find('p').contains(Cypress.env('uniqueTraits').Trait.title).click();
    validateTraitContextMenu(
      Cypress.env('uniqueTraits').Trait.title,
      Cypress.env('uniqueTraits').Trait.subtitle,
      Cypress.env('uniqueTraits').Trait.score,
      Cypress.env('uniqueTraits').Trait.scoreTitle,
      Cypress.env('uniqueTraits').Trait.haveDefinition,
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('uniqueTraits').Trait.title).should('be.visible');
    cy.contains(Cypress.env('uniqueTraits').Trait.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.similiarTraits().click();
    cy.get('[data-testid="similar-traits"]').find('p').contains(Cypress.env('similarTraits').Trait.title).click();
    validateTraitContextMenu(
      Cypress.env('similarTraits').Trait.title,
      Cypress.env('similarTraits').Trait.subtitle,
      Cypress.env('similarTraits').Trait.score,
      Cypress.env('similarTraits').Trait.scoreTitle,
      Cypress.env('similarTraits').Trait.haveDefinition,
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('similarTraits').Trait.title).should('be.visible');
    cy.contains(Cypress.env('similarTraits').Trait.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    impactIndicator.searchAndSelectTrait('Sleep');
    impactIndicator.impactItem().eq(0).click();
    validateTraitContextMenu(
      Cypress.env('impactIndicator').Trait.title,
      Cypress.env('impactIndicator').Trait.subtitle,
      Cypress.env('impactIndicator').Trait.score,
      Cypress.env('impactIndicator').Trait.scoreTitle,
      Cypress.env('impactIndicator').Trait.haveDefinition);
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('impactIndicator').Trait.title).should('be.visible');
    cy.contains(Cypress.env('impactIndicator').Trait.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    sidebarGameMenu.navigate('Personas');
    clustersPage.switchTab('Traits');

    clustersPage.howDescribeMyselfLabel(Cypress.env('howDescribeMyself').High.traitTitle).click();
    validateTraitContextMenu(
      Cypress.env('howDescribeMyself').High.title,
      Cypress.env('howDescribeMyself').High.subtitle,
      Cypress.env('howDescribeMyself').High.score,
      Cypress.env('howDescribeMyself').High.scoreTitle,
      Cypress.env('howDescribeMyself').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('howDescribeMyself').High.title).should('be.visible');
    cy.contains(Cypress.env('howDescribeMyself').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.howDescribeMyselfLabel(Cypress.env('howDescribeMyself').Low.traitTitle).click();
    validateTraitContextMenu(
      Cypress.env('howDescribeMyself').Low.title,
      Cypress.env('howDescribeMyself').Low.subtitle,
      Cypress.env('howDescribeMyself').Low.score,
      Cypress.env('howDescribeMyself').Low.scoreTitle,
      Cypress.env('howDescribeMyself').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('howDescribeMyself').Low.title).should('be.visible');
    cy.contains(Cypress.env('howDescribeMyself').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.myMotivationsTraitItem(Cypress.env('myMotivations').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myMotivations').High.title,
      Cypress.env('myMotivations').High.subtitle,
      Cypress.env('myMotivations').High.score,
      Cypress.env('myMotivations').High.scoreTitle,
      Cypress.env('myMotivations').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myMotivations').High.title).should('be.visible');
    cy.contains(Cypress.env('myMotivations').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.myMotivationsTabLowest().click();
    clustersPage.myMotivationsTraitItem(Cypress.env('myMotivations').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myMotivations').Low.title,
      Cypress.env('myMotivations').Low.subtitle,
      Cypress.env('myMotivations').Low.score,
      Cypress.env('myMotivations').Low.scoreTitle,
      Cypress.env('myMotivations').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myMotivations').Low.title).should('be.visible');
    cy.contains(Cypress.env('myMotivations').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myFrustrationTraitItem(Cypress.env('myFrustrations').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myFrustrations').High.title,
      Cypress.env('myFrustrations').High.subtitle,
      Cypress.env('myFrustrations').High.score,
      Cypress.env('myFrustrations').High.scoreTitle,
      Cypress.env('myFrustrations').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myFrustrations').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Traits');
    clustersPage.myFrustrationTabLowest().click();
    clustersPage.myFrustrationTraitItem(Cypress.env('myFrustrations').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myFrustrations').Low.title,
      Cypress.env('myFrustrations').Low.subtitle,
      Cypress.env('myFrustrations').Low.score,
      Cypress.env('myFrustrations').Low.scoreTitle,
      Cypress.env('myFrustrations').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myFrustrations').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myHopesTraitItem(Cypress.env('myHopes').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myHopes').High.title,
      Cypress.env('myHopes').High.subtitle,
      Cypress.env('myHopes').High.score,
      Cypress.env('myHopes').High.scoreTitle,
      Cypress.env('myHopes').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myHopes').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').wait(5000).go('back').wait(5000);

    clustersPage.switchTab('Traits');
    clustersPage.myHopesTabLowest().click();
    clustersPage.myHopesTraitItem(Cypress.env('myHopes').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myHopes').Low.title,
      Cypress.env('myHopes').Low.subtitle,
      Cypress.env('myHopes').Low.score,
      Cypress.env('myHopes').Low.scoreTitle,
      Cypress.env('myHopes').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click().wait(2000);
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myHopes').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myValuesTraitItem(Cypress.env('myValues').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myValues').High.title,
      Cypress.env('myValues').High.subtitle,
      Cypress.env('myValues').High.score,
      Cypress.env('myValues').High.scoreTitle,
      Cypress.env('myValues').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myValues').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myValuesTabLowest().click();
    clustersPage.myValuesTraitItem(Cypress.env('myValues').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myValues').Low.title,
      Cypress.env('myValues').Low.subtitle,
      Cypress.env('myValues').Low.score,
      Cypress.env('myValues').Low.scoreTitle,
      Cypress.env('myValues').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myValues').Low.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myCultureTraitItem(Cypress.env('myCulture').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myCulture').High.title,
      Cypress.env('myCulture').High.subtitle,
      Cypress.env('myCulture').High.score,
      Cypress.env('myCulture').High.scoreTitle,
      Cypress.env('myCulture').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myCulture').High.title).should('be.visible');
    cy.contains(Cypress.env('myCulture').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Traits');
    clustersPage.myCultureTabLowest().click();
    clustersPage.myCultureTraitItem(Cypress.env('myCulture').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myCulture').Low.title,
      Cypress.env('myCulture').Low.subtitle,
      Cypress.env('myCulture').Low.score,
      Cypress.env('myCulture').Low.scoreTitle,
      Cypress.env('myCulture').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myCulture').Low.title).should('be.visible');
    cy.contains(Cypress.env('myCulture').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myHowSocialTraitItem(Cypress.env('howSocialIam').Trait.title).click();
    validateTraitContextMenu(
      Cypress.env('howSocialIam').Trait.title,
      Cypress.env('howSocialIam').Trait.subtitle,
      Cypress.env('howSocialIam').Trait.score,
      Cypress.env('howSocialIam').Trait.scoreTitle,
      Cypress.env('howSocialIam').Trait.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('howSocialIam').Trait.title).should('be.visible');
    cy.contains(Cypress.env('howSocialIam').Trait.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Traits');
    clustersPage.myCompetitionStyleTraitItem(Cypress.env('myCompetitionStyle').High.title).click();
    validateTraitContextMenu(
      Cypress.env('myCompetitionStyle').High.title,
      Cypress.env('myCompetitionStyle').High.subtitle,
      Cypress.env('myCompetitionStyle').High.score,
      Cypress.env('myCompetitionStyle').High.scoreTitle,
      Cypress.env('myCompetitionStyle').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myCompetitionStyle').High.title).should('be.visible');
    cy.contains(Cypress.env('myCompetitionStyle').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Traits');
    clustersPage.myCompetitionStyleTabLowest().click();
    clustersPage.myCompetitionStyleTraitItem(Cypress.env('myCompetitionStyle').Low.title).click();
    validateTraitContextMenu(
      Cypress.env('myCompetitionStyle').Low.title,
      Cypress.env('myCompetitionStyle').Low.subtitle,
      Cypress.env('myCompetitionStyle').Low.score,
      Cypress.env('myCompetitionStyle').Low.scoreTitle,
      Cypress.env('myCompetitionStyle').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/trait-explorer');
    cy.contains(Cypress.env('myCompetitionStyle').Low.title).should('be.visible');
    cy.contains(Cypress.env('myCompetitionStyle').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);
  }));
});
