/// <reference types="cypress" />

class Charts {

  installsChart() {
    return cy.get('[aria-roledescription="total-installs"]');
  }

  d3RetentionChart() {
    return cy.get('[aria-roledescription="retention-d3"]');
  }

  d7RetentionChart() {
    return cy.get('[aria-roledescription="retention-d7"]');
  }

  d30RetentionChart() {
    return cy.get('[aria-roledescription="retention-d30"]');
  }

  revenueChart() {
    return cy.get('[aria-roledescription="total-revenue"]');
  }

  arpdauChart() {
    return cy.get('[aria-roledescription="average-revenue-per-daily-active-user"]');
  }

  arpuChart() {
    return cy.get('[aria-roledescription="average-revenue-per-user"]');
  }

  arppuChart() {
    return cy.get('[aria-roledescription="average-revenue-per-paying-user"]');
  }

  conversionChart() {
    return cy.get('[aria-roledescription="customer-conversion-rate"]');
  }

  ltvChart() {
    return cy.get('[aria-roledescription="lifetime-revenue"]');
  }

  cpiChart() {
    return cy.get('[aria-roledescription="cost-per-install"]');
  }

  timePlayedChart() {
    return cy.get('[aria-roledescription="total-time-played"]');
  }

  sessionTimeChart() {
    return cy.get('[aria-roledescription="session-time"]');
  }

  sessionCountChart() {
    return cy.get('[aria-roledescription="session-count"]');
  }

  stickinessChart() {
    return cy.get('[aria-roledescription="stickiness"]');
  }

  dauChart() {
    return cy.get('[aria-roledescription="daily-active-users"]');
  }

  mauChart() {
    return cy.get('[aria-roledescription="monthly-active-users"]');
  }

  retentionChart() {
    return cy.get('[aria-roledescription="retention"]');
  }

  newUsersChart() {
    return cy.get('[aria-roledescription="new-users"]');
  }

  sessionLengthChart() {
    return cy.get('[aria-roledescription="session-length"]');
  }

  retentionSessionLengthChart() {
    return cy.get('[aria-roledescription="retention-session-length"]');
  }

  returningPurchasesChart() {
    return cy.get('[aria-roledescription="returning-purchases"]');
  }

  adsWatchedChart() {
    return cy.get('[aria-roledescription="ads-watched"]');
  }

  churnRateChart() {
    return cy.get('[aria-roledescription="churn-rate"]');
  }

  churnersByDayChart() {
    return cy.get('[aria-roledescription="churners-by-day"]');
  }

  levelStartsChart() {
    return cy.get('[aria-roledescription="level-starts"]');
  }

  levelCompletesChart() {
    return cy.get('[aria-roledescription="level-compeletes"]');
  }

  failRateChart() {
    return cy.get('[aria-roledescription="fail-rate"]');
  }

  winRateChart() {
    return cy.get('[aria-roledescription="win-rate"]');
  }

  winLossByDauChart() {
    return cy.get('[aria-roledescription="win-loss-by-dau"]');
  }

  totalRevenueChart() {
    return cy.get('[aria-roledescription="total-revenue"]');
  }

  transactionSizeChart() {
    return cy.get('[aria-roledescription="transaction-size"]');
  }

  purchaseCountChart() {
    return cy.get('[aria-roledescription="purchase-count"]');
  }

  textWidgetsOverallGrowth() {
    return {
      "Installs": this.installsChart(),
      "3 Day Retention": this.d3RetentionChart(),
      "7 Day Retention": this.d7RetentionChart(),
      "30 Day Retention": this.d30RetentionChart(),
    }
  }

  linedWidgetsOverallGrowth() {
    return {
      "ARPDAU": this.arpdauChart(),
      "ARPU": this.arpuChart(),
      "ARPPU": this.arppuChart(),
      "Conversion": this.conversionChart(),
      "Time Played": this.timePlayedChart(),
      "Session Time": this.sessionLengthChart(),
      "Session Count": this.sessionCountChart()
    }
  }

  lineChartsOverallGrowth() {
    return {
      "Revenue": this.revenueChart(),
      "LTV": this.ltvChart(),
      //"CPI": this.cpiChart(),
      "Stickiness": this.stickinessChart(),
      "DAU": this.dauChart(),
      "MAU": this.mauChart(),
    }
  }

  lineChartsEngagement() {
    return {
      "Retention": this.retentionChart(),
      "DAU": this.dauChart(),
      "New Users": this.installsChart(),
      "Session Count": this.sessionCountChart(),
      "Session Length": this.sessionLengthChart(),
      "Time Played": this.timePlayedChart(),
    }
  }

  lineChartsRetention() {
    return {
      "Retention": this.retentionChart(),
      "Session Length by Retention": this.retentionSessionLengthChart(),
      "D3 Retention": this.d3RetentionChart(),
      "D7 Retention": this.d7RetentionChart(),
      "D30 Retention": this.d30RetentionChart(),
      "Session Count": this.sessionCountChart(),
      "Returning Purchases": this.returningPurchasesChart(),
      "Ads Watched": this.adsWatchedChart(),
    }
  }

  lineChartsChurn() {
    return {
      "Churn Rate": this.churnRateChart(),
      "Churners by Day": this.churnersByDayChart(),
    }
  }

  lineChartsProgression() {
    return {
      "Level Starts": this.levelStartsChart(),
      "Level Completes": this.levelCompletesChart(),
      "Fail Rate": this.failRateChart(),
      "Win Rate": this.winRateChart(),
      "Win Loss by DAU": this.winLossByDauChart(),
    }
  }

  lineChartsMonetization() {
    return {
      "LTV": this.ltvChart(),
      "Total Revenue": this.totalRevenueChart(),
      "ARPDAU": this.arpdauChart(),
      "Transaction Size": this.transactionSizeChart(),
      "Purchase Count": this.purchaseCountChart(),
    }
  }

  chartTitle(chart) {
    cy.log(chart);
    return this.chartsContext[chart].find('h1');
  }

  chartTitleTooltip() {
    return cy.get('[data-tippy-root]').children();
  }

  exportToCsvListItem() {
    return cy.get('[role="button"]').contains('Export spreadsheet (.csv)');
  }

  openGlossaryListItem() {
    return cy.get('[role="button"]').contains('Glossary');
  }

  chartDescription(chart) {
    return this.chartsContext[chart].find('h2');
  }

  openGlossary(chart) {
    this.chartsContext[chart].find('[data-testid="dictionary-open"]').realClick();
  }

  closeGlossary() {
    cy.get('[data-testid="overlay-close"]').realClick();
  }

  openOverflowMenu(chart) {
    this.chartsContext[chart].find('[aria-label="Open"]').realClick();
  }

  exportGhartToImage(chart) {
    this.chartsContext[chart].find('TODO').realClick();
  }

  exportGhartToCSV(chart) {
    return chart;
  }


  getChartsContext() {
    return this.chartsContext;
  }

  setChartsContext(charts) {
    this.chartsContext = charts
  }
}

export default new Charts();