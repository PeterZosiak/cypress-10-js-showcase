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
    cy.login('/home/quality');
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

  function validateQualityContextMenu(title, subtitle, score, scoreTitle, hasDefinition = true) {
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
      contextMenu.sectionTitleDeepDive().should('have.text', 'Acquiring players with this quality')
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

  qase(181, it('should be able to open Quality Context menu on click', () => {
    clustersPage.switchTab('Qualitys');

    clustersPage.uniqueQualitys().click();
    cy.get('[data-testid="unique-qualitys"]').find('p').contains(Cypress.env('uniqueQualitys').Quality.title).click();
    validateQualityContextMenu(
      Cypress.env('uniqueQualitys').Quality.title,
      Cypress.env('uniqueQualitys').Quality.subtitle,
      Cypress.env('uniqueQualitys').Quality.score,
      Cypress.env('uniqueQualitys').Quality.scoreTitle,
      Cypress.env('uniqueQualitys').Quality.haveDefinition,
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('uniqueQualitys').Quality.title).should('be.visible');
    cy.contains(Cypress.env('uniqueQualitys').Quality.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.similiarQualitys().click();
    cy.get('[data-testid="similar-qualitys"]').find('p').contains(Cypress.env('similarQualitys').Quality.title).click();
    validateQualityContextMenu(
      Cypress.env('similarQualitys').Quality.title,
      Cypress.env('similarQualitys').Quality.subtitle,
      Cypress.env('similarQualitys').Quality.score,
      Cypress.env('similarQualitys').Quality.scoreTitle,
      Cypress.env('similarQualitys').Quality.haveDefinition,
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('similarQualitys').Quality.title).should('be.visible');
    cy.contains(Cypress.env('similarQualitys').Quality.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    impactIndicator.searchAndSelectQuality('Sleep');
    impactIndicator.impactItem().eq(0).click();
    validateQualityContextMenu(
      Cypress.env('impactIndicator').Quality.title,
      Cypress.env('impactIndicator').Quality.subtitle,
      Cypress.env('impactIndicator').Quality.score,
      Cypress.env('impactIndicator').Quality.scoreTitle,
      Cypress.env('impactIndicator').Quality.haveDefinition);
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('impactIndicator').Quality.title).should('be.visible');
    cy.contains(Cypress.env('impactIndicator').Quality.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    sidebarGameMenu.navigate('Personas');
    clustersPage.switchTab('Qualitys');

    clustersPage.howDescribeMyselfLabel(Cypress.env('howDescribeMyself').High.qualityTitle).click();
    validateQualityContextMenu(
      Cypress.env('howDescribeMyself').High.title,
      Cypress.env('howDescribeMyself').High.subtitle,
      Cypress.env('howDescribeMyself').High.score,
      Cypress.env('howDescribeMyself').High.scoreTitle,
      Cypress.env('howDescribeMyself').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('howDescribeMyself').High.title).should('be.visible');
    cy.contains(Cypress.env('howDescribeMyself').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.howDescribeMyselfLabel(Cypress.env('howDescribeMyself').Low.qualityTitle).click();
    validateQualityContextMenu(
      Cypress.env('howDescribeMyself').Low.title,
      Cypress.env('howDescribeMyself').Low.subtitle,
      Cypress.env('howDescribeMyself').Low.score,
      Cypress.env('howDescribeMyself').Low.scoreTitle,
      Cypress.env('howDescribeMyself').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('howDescribeMyself').Low.title).should('be.visible');
    cy.contains(Cypress.env('howDescribeMyself').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.myMotivationsQualityItem(Cypress.env('myMotivations').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myMotivations').High.title,
      Cypress.env('myMotivations').High.subtitle,
      Cypress.env('myMotivations').High.score,
      Cypress.env('myMotivations').High.scoreTitle,
      Cypress.env('myMotivations').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myMotivations').High.title).should('be.visible');
    cy.contains(Cypress.env('myMotivations').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.myMotivationsTabLowest().click();
    clustersPage.myMotivationsQualityItem(Cypress.env('myMotivations').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myMotivations').Low.title,
      Cypress.env('myMotivations').Low.subtitle,
      Cypress.env('myMotivations').Low.score,
      Cypress.env('myMotivations').Low.scoreTitle,
      Cypress.env('myMotivations').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myMotivations').Low.title).should('be.visible');
    cy.contains(Cypress.env('myMotivations').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myFrustrationQualityItem(Cypress.env('myFrustrations').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myFrustrations').High.title,
      Cypress.env('myFrustrations').High.subtitle,
      Cypress.env('myFrustrations').High.score,
      Cypress.env('myFrustrations').High.scoreTitle,
      Cypress.env('myFrustrations').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myFrustrations').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Qualitys');
    clustersPage.myFrustrationTabLowest().click();
    clustersPage.myFrustrationQualityItem(Cypress.env('myFrustrations').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myFrustrations').Low.title,
      Cypress.env('myFrustrations').Low.subtitle,
      Cypress.env('myFrustrations').Low.score,
      Cypress.env('myFrustrations').Low.scoreTitle,
      Cypress.env('myFrustrations').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myFrustrations').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myHopesQualityItem(Cypress.env('myHopes').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myHopes').High.title,
      Cypress.env('myHopes').High.subtitle,
      Cypress.env('myHopes').High.score,
      Cypress.env('myHopes').High.scoreTitle,
      Cypress.env('myHopes').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myHopes').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').wait(5000).go('back').wait(5000);

    clustersPage.switchTab('Qualitys');
    clustersPage.myHopesTabLowest().click();
    clustersPage.myHopesQualityItem(Cypress.env('myHopes').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myHopes').Low.title,
      Cypress.env('myHopes').Low.subtitle,
      Cypress.env('myHopes').Low.score,
      Cypress.env('myHopes').Low.scoreTitle,
      Cypress.env('myHopes').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click().wait(2000);
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myHopes').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myValuesQualityItem(Cypress.env('myValues').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myValues').High.title,
      Cypress.env('myValues').High.subtitle,
      Cypress.env('myValues').High.score,
      Cypress.env('myValues').High.scoreTitle,
      Cypress.env('myValues').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myValues').High.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myValuesTabLowest().click();
    clustersPage.myValuesQualityItem(Cypress.env('myValues').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myValues').Low.title,
      Cypress.env('myValues').Low.subtitle,
      Cypress.env('myValues').Low.score,
      Cypress.env('myValues').Low.scoreTitle,
      Cypress.env('myValues').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myValues').Low.explorerCategory).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myCultureQualityItem(Cypress.env('myCulture').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myCulture').High.title,
      Cypress.env('myCulture').High.subtitle,
      Cypress.env('myCulture').High.score,
      Cypress.env('myCulture').High.scoreTitle,
      Cypress.env('myCulture').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myCulture').High.title).should('be.visible');
    cy.contains(Cypress.env('myCulture').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Qualitys');
    clustersPage.myCultureTabLowest().click();
    clustersPage.myCultureQualityItem(Cypress.env('myCulture').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myCulture').Low.title,
      Cypress.env('myCulture').Low.subtitle,
      Cypress.env('myCulture').Low.score,
      Cypress.env('myCulture').Low.scoreTitle,
      Cypress.env('myCulture').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myCulture').Low.title).should('be.visible');
    cy.contains(Cypress.env('myCulture').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myHowSocialQualityItem(Cypress.env('howSocialIam').Quality.title).click();
    validateQualityContextMenu(
      Cypress.env('howSocialIam').Quality.title,
      Cypress.env('howSocialIam').Quality.subtitle,
      Cypress.env('howSocialIam').Quality.score,
      Cypress.env('howSocialIam').Quality.scoreTitle,
      Cypress.env('howSocialIam').Quality.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('howSocialIam').Quality.title).should('be.visible');
    cy.contains(Cypress.env('howSocialIam').Quality.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);


    clustersPage.switchTab('Qualitys');
    clustersPage.myCompetitionStyleQualityItem(Cypress.env('myCompetitionStyle').High.title).click();
    validateQualityContextMenu(
      Cypress.env('myCompetitionStyle').High.title,
      Cypress.env('myCompetitionStyle').High.subtitle,
      Cypress.env('myCompetitionStyle').High.score,
      Cypress.env('myCompetitionStyle').High.scoreTitle,
      Cypress.env('myCompetitionStyle').High.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myCompetitionStyle').High.title).should('be.visible');
    cy.contains(Cypress.env('myCompetitionStyle').High.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);

    clustersPage.switchTab('Qualitys');
    clustersPage.myCompetitionStyleTabLowest().click();
    clustersPage.myCompetitionStyleQualityItem(Cypress.env('myCompetitionStyle').Low.title).click();
    validateQualityContextMenu(
      Cypress.env('myCompetitionStyle').Low.title,
      Cypress.env('myCompetitionStyle').Low.subtitle,
      Cypress.env('myCompetitionStyle').Low.score,
      Cypress.env('myCompetitionStyle').Low.scoreTitle,
      Cypress.env('myCompetitionStyle').Low.haveDefinition
    );
    contextMenu.deepDiveBtn().click();
    cy.url().should('include', '/quality-explorer');
    cy.contains(Cypress.env('myCompetitionStyle').Low.title).should('be.visible');
    cy.contains(Cypress.env('myCompetitionStyle').Low.subtitle).should('be.visible');
    cy.wait(5000).go('back').go('back').wait(2000);
  }));
});
