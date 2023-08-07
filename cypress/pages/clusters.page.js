/// <reference types="cypress" />

class ClustersPage {
  constructor() {
    // even though we will never instantiate this class
  }

  clusterProfile() {
    return cy.get('[class^="_cluster-wrapper_"]');
  }

  clusterProfile2() {
    return cy.get('[class^="_cluster-wrapper_"]');
  }

  flow() {
    return cy.get('[data-testid="flow"]');
  }

  flowCTA() {
    return this.flow().find('[role="button"]');
  }

  flowCTABtn() {
    return this.ability().find('[class^="_flow-act-button_"]');
  }

  ability() {
    return cy.get('[data-testid="ability"]');
  }

  abilityCTA() {
    return this.ability().find('[role="button"]');
  }

  abilityCTABtn() {
    return this.ability().find('[class^="_ability-act-button_"]');
  }

  clusterTabBtnExperience() {
    return cy.get('[data-testid="tab-item Experience"]');
  }

  clusterTabBtnQualitys() {
    return cy.get('[data-testid="tab-item Qualitys"]');
  }

  clusterTabBrnProfile() {
    return cy.get('[data-testid="tab-item Profile"]');
  }

  clusterProfileActionsBtn() {
    return cy.get('[data-testid="cluster-actions"]');
  }

  experienceTab() {
    return cy.get('[data-testid="experience-tab"]');
  }

  myUxMetrics() {
    return cy.get('[data-testid="ux-metrics"]');
  }

  communityScore() {
    return cy.get('[data-testid="com-score"]');
  }

  communityScoreChart() {
    return this.communityScore().find('[data-testid="graph-score"]');
  }

  uniqueQualitys() {
    return cy.get('[data-testid="tab-item Unique Qualitys"]');
  }

  similiarQualitys() {
    return cy.get('[data-testid="tab-item Similar Qualitys"]');
  }

  howDescribeMyself() {
    return cy.get('[data-testid="how-desc"]');
  }

  howDescribeMyselfLabel(quality) {
    return this.howDescribeMyself().find(`[data-testid="circle-label"]`).contains(quality);
  }

  myMotivationsWrapper() {
    return cy.get('[data-testid="motivate"]');
  }

  myMotivationsTabHighest() {
    return this.myMotivationsWrapper().find('[data-testid="tab-item Highest"]');
  }

  myMotivationsTabLowest() {
    return this.myMotivationsWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myMotivationsQualityItem(quality) {
    return this.myMotivationsWrapper().find(`[class^="_list-item-label_"]`).contains(quality);
  }

  myFrustrationWrapper() {
    return cy.get('[data-testid="frust"]');
  }

  myFrustrationTabHighest() {
    return this.myFrustrationWrapper().find('[data-testid="tab-item Highest"]');
  }

  myFrustrationTabLowest() {
    return this.myFrustrationWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myFrustrationQualityItem(quality) {
    return this.myFrustrationWrapper().find(`[class^="_item_"]`).contains(quality);
  }

  myHopesWrapper() {
    return cy.get('[data-testid="hopes"]');
  }

  myHopesTabHighest() {
    return this.myHopesWrapper().find('[data-testid="tab-item Highest"]');
  }

  myHopesTabLowest() {
    return this.myHopesWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myHopesQualityItem(quality) {
    return this.myHopesWrapper().find(`[class^="_item_"]`).contains(quality);
  }

  myValuesWrapper() {
    return cy.get('[data-testid="values"]');
  }

  myValuesTabHighest() {
    return this.myValuesWrapper().find('[data-testid="tab-item Highest"]');
  }

  myValuesTabLowest() {
    return this.myValuesWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myValuesQualityItem(quality) {
    return this.myValuesWrapper().find(`[class^="_list-item-label_"]`).contains(quality);
  }

  myCultureWrapper() {
    return cy.get('[data-testid="culture"]');
  }

  myCultureTabHighest() {
    return this.myCultureWrapper().find('[data-testid="tab-item Highest"]');
  }

  myCultureTabLowest() {
    return this.myCultureWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myCultureQualityItem(quality) {
    return this.myCultureWrapper().find(`[class^="_score_"]`).contains(quality);
  }

  myHowSocialWrapper() {
    return cy.get('[data-testid="social"]');
  }

  myHowSocialQualityItem(quality) {
    return this.myHowSocialWrapper().find(`[class^="_score_"]`).contains(quality);
  }

  myCompetitionStyleWrapper() {
    return cy.get('[data-testid="compete"]');
  }

  myCompetitionStyleTabHighest() {
    return this.myCompetitionStyleWrapper().find('[data-testid="tab-item Highest"]');
  }

  myCompetitionStyleTabLowest() {
    return this.myCompetitionStyleWrapper().find('[data-testid="tab-item Lowest"]');
  }

  myCompetitionStyleQualityItem(quality) {
    return this.myCompetitionStyleWrapper().find(`[class^="_score_"]`).contains(quality);
  }

  switchTab(tab) {
    switch (tab) {
      case 'Experience':
        this.clusterTabBtnExperience().click();
        break;
      case 'Qualitys':
        this.clusterTabBtnQualitys().click();
        break;
      case 'Profile':
        this.clusterTabBrnProfile().click();
        break;
      default:
        break;
    }
  }
}

export default new ClustersPage();
