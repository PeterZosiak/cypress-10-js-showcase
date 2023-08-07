/// <reference types="cypress" />

class SentimentChartComponent {
  sentimentChart() {
    return cy.get('#chart-sentiment-root');
  }

  sentimentChartTitle() {
    return cy.get('[data-testid="sentiment-chart-title"]');
  }

  channelSwitcherBtn() {
    return cy.get('[data-testid="single-select-open"]');
  }

  channelSwitcherOption(channel) {
    return cy.get(`[data-testid="single-select-option"]`).contains(channel);
  }

  channelSwitcherOptionMenu() {
    return cy.get('[data-testid="single-select-options"]').first().parent();
  }

  legendsToggleBtn() {
    return cy.get('[data-testid="toogle-filters"]').parent();
  }

  legendItemRelease() {
    return cy.get('[aria-roledescription="releases"]');
  }

  legendItemPositive() {
    return cy.get('[aria-roledescription="positive"]', { timeout: 10000 });
  }

  legendItemNegative() {
    return cy.get('[aria-roledescription="negative"]');
  }

  legendItemNeutral() {
    return cy.get('[aria-roledescription="neutral"]');
  }

  glossaryBtn() {
    return cy.get('[class="_sentiment-dictionary-icon_ooyjb_10"]');
  }

  timelineDayBtn() {
    return cy.get('[data-testid="select-day-timeline"]', { timeout: 10000 });
  }

  timelineWeekBtn() {
    return cy.get('[data-testid="select-week-timeline"]');
  }

  timelineMonthBtn() {
    return cy.get('[data-testid="select-month-timeline"]');
  }

  timelineQuarterBtn() {
    return cy.get('[data-testid="select-quarter-timeline"]');
  }

  timelineYearBtn() {
    return cy.get('[data-testid="select-year-timeline"]');
  }

  timelineAllBtn() {
    return cy.get('[data-testid="select-all-timeline"]');
  }

  averageValue() {
    return cy.get('[data-test-id="status-average-value"]');
  }

  score() {
    return cy.get('[data-testid="value-change-value"]');
  }

  scoreTimeRange() {
    return cy.get('[data-testid="value-change-timeline-label"]');
  }

  positiveChartArea() {
    return cy.get('[class*="_positive_"]');
  }

  negativeChartArea() {
    return cy.get('[class*="_negative_"]');
  }

  neutralChartArea() {
    return cy.get('[class*="_neutral_"]');
  }

  scoreChartLine() {
    return cy.get('[class*="_score_"]');
  }

  releaseIcons(channel) {
    return cy.get(`[data-testid="open-${channel}-release"]`).first();
  }

  releaseTooltip() {
    return cy.get('[class*="_tooltip-details_"]').children();
  }

  releaseTooltipArror() {
    return cy.get('[class*="_tooltip-arrow-wrapper"]');
  }

  releaseTooltipLink() {
    return this.releaseTooltip().find('a');
  }

  releaseTabTitle(store) {
    return cy.get(`[data-testid="tab-item ${store}"]`);
  }

  releaseTabTitleIcon(store) {
    return this.releaseTabTitle(store).find('svg');
  }

  releaseTabContent() {
    return cy.get('[data-testid="detailed-release-info"]');
  }

  releaseTabReleaseTitle() {
    return cy.get('[data-testid="release-title"]');
  }

  releaseTabReleaseTitleLink() {
    return cy.get('[data-testid="release-title-link"]');
  }

  releaseTabDescription() {
    return cy.get('[data-testid="detailed-release-description"]');
  }

  releaseTabCloseBtn() {
    return cy.get('[data-testid="close-detailed-release"]');
  }

  chartDatapoint() {
    return cy.get('[class*="_line-y-wrap_"]');
  }

  chartDatapointTooltip() {
    return cy.get('[class*="_tooltip-details_"]', { timeout: 20000 }).children();
  }

  chartDatapointTooltipSentiment() {
    return this.chartDatapointTooltip().find('[aria-roledescription="sentiment"]');
  }

  chartDatapointTooltipPositive() {
    return this.chartDatapointTooltip().find('[aria-roledescription="positive"]');
  }

  chartDatapointTooltipNegative() {
    return this.chartDatapointTooltip().find('[aria-roledescription="negative"]');
  }

  chartDatapointTooltipNeutral() {
    return this.chartDatapointTooltip().find('[aria-roledescription="neutral"]');
  }

  chartDatapointLink() {
    return this.chartDatapointTooltip().find('div').contains('Click date to view conversations');
  }

  chartDatapointTooltipValueType() {
    return this.chartDatapointTooltip().find('[class*="_type_"]');
  }

  chartDatapointTooltipValueVolume() {
    return this.chartDatapointTooltip().find('[class*="_volume_"]');
  }

  chartDatapointTooltipValuePercentage() {
    return this.chartDatapointTooltip().find('[class*="_percentage_"]');
  }

  chartNoDataArea() {
    return cy.get('[class*="_chart-no-data_"]');
  }

  getChartAreaStartColor(chartArea) {
    return chartArea.find('[class="start"]').first();
  }

  getChartAreaEndColor(chartArea) {
    return chartArea.find('[class="end"]').first();
  }

  getLegendShowIcon(legendItem) {
    return legendItem.find('[aria-roledescription="visible"]');
  }

  getLegendHideIcon(legendItem) {
    return legendItem.find('[aria-roledescription="hidden"]');
  }

  switchToChannel(channel) {
    this.channelSwitcherBtn().click();
    this.channelSwitcherOption(channel).click();
  }

}

export default new SentimentChartComponent;