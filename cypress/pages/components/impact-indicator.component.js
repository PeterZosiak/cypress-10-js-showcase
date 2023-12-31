/// <reference types="cypress" />

class ImpactIndicatorComponent {
  rootElement() {
    return cy.get('[data-testid="impact-indicator"]');
  }

  dictionaryOpen() {
    return this.rootElement().find('[data-testid="dictionary-open"]');
  }

  searchableDropdown() {
    return this.rootElement().find('[data-testid="searchable-dropdown"]').find('input');
  }

  inputText() {
    return this.rootElement().find('[data-testid="input-text"]');
  }

  categoryKPIS() {
    return this.rootElement().find('[data-testid="category kpis"]');
  }

  categoryPsychologicalQualitys() {
    return this.rootElement().find('[data-testid="category psychological_qualitys"]');
  }

  categoryUXMetrics() {
    return this.rootElement().find('[data-testid="category ux_metrics"]');
  }

  sortIcon() {
    return this.rootElement().find('[data-testid="button-icon"]');
  }

  sortingDropdownHead() {
    return this.rootElement().find('[data-testid="sorting-dropdown-head"]');
  }

  impactItem() {
    return this.rootElement().find('[data-testid="impact-item"]');
  }

  impactItemQualityWrapper() {
    return this.rootElement().find('[data-testid="impact-item-quality-wrapper"]');
  }

  impactItemQualityScore() {
    return this.rootElement().find('[data-testid="impact-item-quality-score"]');
  }

  impactItemQualityName() {
    return this.rootElement().find('[data-testid="impact-item-quality-name"]');
  }

  impactItemTagWrapper() {
    return this.rootElement().find('[data-testid="impact-item-tag-wrapper"]');
  }

  impactItemTag() {
    return this.rootElement().find('[data-testid="impact-item-tag"]');
  }

  impactScoreWrapper() {
    return this.rootElement().find('[data-testid="impact-score-wrapper"]');
  }

  impactScoreLabel() {
    return this.rootElement().find('[data-testid="impact-score-label"]');
  }

  impactScoreValue() {
    return this.rootElement().find('[data-testid="impact-score-value"]');
  }
  categoryOption(option) {
    return this.rootElement().find('[data-testid^="category-option"]').contains(option);
  }

  impactItemsWrapper() {
    return this.rootElement().find('[data-testid="impact-items-wrapper"]');
  }

  header() {
    return this.rootElement().find('[data-testid="header"]');
  }

  title() {
    return this.rootElement().find('[class^="_title_"]');
  }

  footer() {
    return this.rootElement().find('[data-testid="footer"]');
  }

  dictionaryWrapper() {
    return this.rootElement().find('[data-testid="dictionary-wrapper"]');
  }

  dictionary() {
    return this.rootElement().find('[data-testid="dictionary"]');
  }

  dictionaryDefinition() {
    return this.rootElement().find('[data-testid="dictionary-definition"]');
  }

  sortOption(option) {
    return this.rootElement().find('[data-testid="sorting-option--"]').contains(option);
  }

  sortOptionSelected() {
    return this.rootElement().find('[data-testid="sorting-option--selected"]');
  }

  settingsListBtn() {
    return this.rootElement().find('[class^="_settings-wrapper_"]');
  }

  settingListOption(option) {
    return this.rootElement().find('[class^="_settings-list-item_"]').contains(option);
  }

  searchAndSelectQuality(quality) {
    this.rootElement().should('be.visible');
    this.searchableDropdown().type(quality);
    this.categoryOption(quality).click();
  }

  selectQualityFromCategory(category, quality) {
    this.searchableDropdown().click();
    switch (category) {
      case 'Psychological qualitys':
        this.categoryPsychologicalQualitys().click();
        break;
      case 'UX metrics':
        this.categoryUXMetrics().click();
        break;
      default:
        break;
    }

    this.categoryOption(quality).click();

  }
  sortQualitys(option) {
    this.sortIcon().click();
    this.sortOption(option).click();
  }

  selectSettings(option) {
    this.settingsListBtn().click();
    this.settingListOption(option).click();
  }

}

export default new ImpactIndicatorComponent();
