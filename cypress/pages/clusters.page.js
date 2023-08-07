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

  clusterTabBtnTraits() {
    return cy.get('[data-testid="tab-item Traits"]');
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

  uniqueTraits() {
    return cy.get('[data-testid="tab-item Unique Traits"]');
  }

  similiarTraits() {
    return cy.get('[data-testid="tab-item Similar Traits"]');
  }

  howDescribeMyself() {
    return cy.get('[data-testid="how-desc"]');
  }

  howDescribeMyselfLabel(trait) {
    return this.howDescribeMyself().find(`[data-testid="circle-label"]`).contains(trait);
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

  myMotivationsTraitItem(trait) {
    return this.myMotivationsWrapper().find(`[class^="_list-item-label_"]`).contains(trait);
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

  myFrustrationTraitItem(trait) {
    return this.myFrustrationWrapper().find(`[class^="_item_"]`).contains(trait);
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

  myHopesTraitItem(trait) {
    return this.myHopesWrapper().find(`[class^="_item_"]`).contains(trait);
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

  myValuesTraitItem(trait) {
    return this.myValuesWrapper().find(`[class^="_list-item-label_"]`).contains(trait);
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

  myCultureTraitItem(trait) {
    return this.myCultureWrapper().find(`[class^="_score_"]`).contains(trait);
  }

  myHowSocialWrapper() {
    return cy.get('[data-testid="social"]');
  }

  myHowSocialTraitItem(trait) {
    return this.myHowSocialWrapper().find(`[class^="_score_"]`).contains(trait);
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

  myCompetitionStyleTraitItem(trait) {
    return this.myCompetitionStyleWrapper().find(`[class^="_score_"]`).contains(trait);
  }

  switchTab(tab) {
    switch (tab) {
      case 'Experience':
        this.clusterTabBtnExperience().click();
        break;
      case 'Traits':
        this.clusterTabBtnTraits().click();
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
