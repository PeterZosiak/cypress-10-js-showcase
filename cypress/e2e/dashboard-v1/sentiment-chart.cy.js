import { qase } from 'cypress-qase-reporter/dist/mocha';
import sentimentChart from '../../pages/components/sentiment-chart.component';
import conversationThreadsPage from '../../pages/conversation-threads.page';
import contextMenu from '../../pages/components/context-menu.component';

describe.skip('Sentiment chart', { scrollBehavior: false }, () => {
  beforeEach(() => {
    cy.cssDisableMotion();
    cy.clearLocalStorage();
    cy.window().then((window) => {
      window.localStorage.setItem('assessmentFTUEStep', '3');
      window.localStorage.setItem('sentimentChartTimeline', 'month');
    });

    cy.login('/home/trait');
    cy.navigateToGame(Cypress.env('gameDefault').name);
    // Scroll to view because Hover CSS validation does not work with auto-scroll
    sentimentChart.sentimentChart()
      .scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } });

    // Wait for chart to load
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.scoreChartLine().should('be.visible');
  });

  qase(150, it('should contains all Sentiment chart elements', () => {
    sentimentChart.sentimentChart().should('be.visible'); // Check if Sentiment chart is visible
    sentimentChart.sentimentChartTitle().should('be.visible'); // Check if Sentiment chart title is visible
    sentimentChart.channelSwitcherBtn().should('be.visible'); // Check if Channel switcher button is visible
    sentimentChart.legendsToggleBtn().should('be.visible'); // Check if Legends toggle button is visible
    sentimentChart.legendItemRelease().should('be.visible'); // Check if Release legend item is visible
    sentimentChart.legendItemPositive().should('be.visible'); // Check if Positive legend item is visible
    sentimentChart.legendItemNeutral().should('be.visible'); // Check if Neutral legend item is visible
    sentimentChart.legendItemNegative().should('be.visible'); // Check if Negative legend item is visible
    sentimentChart.glossaryBtn().should('be.visible'); // Check if Glossary button is visible
    sentimentChart.timelineDayBtn().should('be.visible'); // Check if Timeline Day button is visible
    sentimentChart.timelineWeekBtn().should('be.visible'); // Check if Timeline Week button is visible
    sentimentChart.timelineMonthBtn().should('be.visible'); // Check if Timeline Month button is visible
    sentimentChart.timelineQuarterBtn().should('be.visible'); // Check if Timeline Quarter button is visible
    sentimentChart.timelineYearBtn().should('be.visible'); // Check if Timeline Year button is visible
    sentimentChart.timelineAllBtn().should('be.visible'); // Check if Timeline All button is visible
    sentimentChart.averageValue().should('be.visible'); // Check if Average value is visible
    sentimentChart.scoreTimeRange().should('be.visible'); // Check if Score time range is visible
    sentimentChart.positiveChartArea().should('be.visible'); // Check if Positive chart area is visible
    sentimentChart.neutralChartArea().should('be.visible'); // Check if Neutral chart area is visible
    sentimentChart.negativeChartArea().should('be.visible'); // Check if Negative chart area is visible
    sentimentChart.scoreChartLine().should('be.visible'); // Check if Score chart line is visible
    sentimentChart.releaseIcons('apple').should('be.visible'); // Check if Release icon is visible
  }));

  qase(151, it('should have all elements in default state and match design proposal', () => {
    sentimentChart.sentimentChartTitle()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '26px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '31px')
      .and('have.css', 'margin-right', '8px');

    sentimentChart.channelSwitcherBtn().parent()
      .should('have.css', 'opacity', '0.5')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'padding', '0px 12px')
      .and('have.css', 'font-weight', '700');

    sentimentChart.channelSwitcherBtn().children()
      .should('have.css', 'color', 'rgb(29, 48, 84)')
      .and('have.css', 'font-weight', '700')
      .children()
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'line-height', '24px');

    sentimentChart.legendsToggleBtn().children()
      .should('have.css', 'color', 'rgb(29, 48, 84)');
    sentimentChart.legendsToggleBtn().visualRegressionSnapshotElement('Sentiment chart - Legends toggle button');

    sentimentChart.legendItemRelease()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'line-height', '16px')
      .before('background-color')
      .should('eq', 'rgb(152, 145, 252)');
    sentimentChart.legendItemRelease().visualRegressionSnapshotElement('Sentiment chart - Release legend item');

    sentimentChart.legendItemPositive()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'line-height', '16px')
      .before('background')
      .should('contains', 'linear-gradient(rgb(106, 224, 127) 49.37%, rgba(106, 224, 127, 0.5) 100%)');
    sentimentChart.legendItemPositive().visualRegressionSnapshotElement('Sentiment chart - Positive legend item');

    sentimentChart.legendItemNeutral()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'line-height', '16px')
      .before('background-color')
      .should('eq', 'rgb(219, 221, 228)');
    sentimentChart.legendItemNeutral().visualRegressionSnapshotElement('Sentiment chart - Neutral legend item');

    sentimentChart.legendItemNegative()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'line-height', '16px')
      .before('background')
      .should('contains', 'linear-gradient(rgb(255, 0, 67) 49.37%, rgba(255, 0, 93, 0.5) 100%)');
    sentimentChart.legendItemNegative().visualRegressionSnapshotElement('Sentiment chart - Negative legend item');

    sentimentChart.glossaryBtn()
      .should('have.css', 'color', 'rgb(29, 48, 84)')
      .and('have.css', 'opacity', '0.5');
    sentimentChart.glossaryBtn().visualRegressionSnapshotElement('Sentiment chart - Glossary button');

    sentimentChart.timelineDayBtn()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'Day');
    sentimentChart.timelineDayBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline day button');

    sentimentChart.timelineWeekBtn()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'Week');
    sentimentChart.timelineMonthBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline month button');

    sentimentChart.timelineQuarterBtn()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'Quarter');
    sentimentChart.timelineQuarterBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline quarter button');

    sentimentChart.timelineYearBtn()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'Year');
    sentimentChart.timelineYearBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline year button');

    sentimentChart.timelineAllBtn()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'All time');
    sentimentChart.timelineAllBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline all time button');

    sentimentChart.timelineMonthBtn()
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('contain.text', 'Month');
    sentimentChart.timelineWeekBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline week button');

    sentimentChart.averageValue()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '42px')
      .and('have.css', 'font-weight', '900')
      .and('have.css', 'line-height', '50px');

    sentimentChart.scoreTimeRange()
      .should('have.css', 'color', 'rgba(19, 61, 102, 0.5)')
      .and('have.css', 'opacity', '1')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '500');

    sentimentChart.getChartAreaStartColor(sentimentChart.positiveChartArea())
      .should('have.css', 'stop-color', 'rgb(106, 224, 127)');
    sentimentChart.getChartAreaEndColor(sentimentChart.positiveChartArea())
      .should('have.css', 'stop-color', 'rgba(106, 224, 127, 0.5)');

    sentimentChart.getChartAreaStartColor(sentimentChart.neutralChartArea())
      .should('have.css', 'stop-color', 'rgb(186, 202, 219)');
    sentimentChart.getChartAreaEndColor(sentimentChart.neutralChartArea())
      .should('have.css', 'stop-color', 'rgb(186, 202, 219)');

    sentimentChart.getChartAreaStartColor(sentimentChart.negativeChartArea())
      .should('have.css', 'stop-color', 'rgb(255, 0, 93)');
    sentimentChart.getChartAreaEndColor(sentimentChart.negativeChartArea())
      .should('have.css', 'stop-color', 'rgba(255, 0, 93, 0.5)');

    sentimentChart.scoreChartLine()
      .should('have.css', 'color', 'rgb(19, 61, 102)');

    sentimentChart.releaseIcons('apple').should('be.visible')
      .should('have.css', 'background-color', 'rgb(152, 145, 252)')
      .and('have.css', 'border-radius', '50%');
  }));

  qase(152, it('should change Timeline button state on hover', () => {
    sentimentChart.timelineDayBtn()
      .realHover('mouse');
    sentimentChart.timelineDayBtn()
      .should('have.css', 'background-color', 'rgb(218, 229, 240)')
      .and('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');

    sentimentChart.timelineWeekBtn()
      .realHover('mouse');
    sentimentChart.timelineWeekBtn()
      .should('have.css', 'background-color', 'rgb(218, 229, 240)')
      .and('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');

    sentimentChart.timelineQuarterBtn()
      .realHover('mouse');
    sentimentChart.timelineQuarterBtn()
      .should('have.css', 'background-color', 'rgb(218, 229, 240)')
      .and('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');

    sentimentChart.timelineYearBtn()
      .realHover('mouse');
    sentimentChart.timelineYearBtn()
      .should('have.css', 'background-color', 'rgb(218, 229, 240)')
      .and('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');

    sentimentChart.timelineAllBtn()
      .realHover('mouse');
    sentimentChart.timelineAllBtn()
      .should('have.css', 'background-color', 'rgb(218, 229, 240)')
      .and('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
  }));

  qase(153, it('should update Sentiment chart on Timeline button click', () => {
    sentimentChart.timelineDayBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineDayBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineWeekBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline day button - selected');

    sentimentChart.timelineWeekBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineWeekBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineWeekBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline week button - selected');

    sentimentChart.timelineMonthBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineMonthBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineMonthBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline month button - selected');

    sentimentChart.timelineQuarterBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineQuarterBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineQuarterBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline quarter button - selected');

    sentimentChart.timelineYearBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineYearBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineYearBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline year button - selected');

    sentimentChart.timelineAllBtn().realClick();
    // Wait for chart to update
    sentimentChart.averageValue().should('be.visible');
    sentimentChart.timelineAllBtn()
      .should('have.css', 'background-color', 'rgb(19, 61, 102)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'height', '27px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center');
    sentimentChart.timelineAllBtn().visualRegressionSnapshotElement('Sentiment chart - Timeline all button - selected');
  }));

  qase(154, it('should change Legend button state on hover', () => {
    sentimentChart.legendsToggleBtn().realHover('mouse').wait(1000);
    sentimentChart.legendItemRelease().realHover('mouse').wait(1000);
    sentimentChart.legendItemRelease()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 0px 10px 40px 0px')
      .before('background-color')
      .should('eq', 'rgb(152, 145, 252)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemRelease())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(152, 145, 252)');

    sentimentChart.legendItemNegative().realHover('mouse');
    sentimentChart.legendItemNegative()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 0px 10px 40px 0px')
      .before('background')
      .should('contain', 'linear-gradient(rgb(255, 0, 67) 49.37%, rgba(255, 0, 93, 0.5) 100%) ');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemNegative())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(255, 0, 67)');

    sentimentChart.legendItemNeutral().realHover('mouse');
    sentimentChart.legendItemNeutral()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 0px 10px 40px 0px')
      .before('background-color')
      .should('contain', 'rgb(219, 221, 228)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemNeutral())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(219, 221, 228)');

    sentimentChart.legendItemPositive().realHover('mouse');
    sentimentChart.legendItemPositive()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 0px 10px 40px 0px')
      .before('background')
      .should('contain', 'linear-gradient(rgb(106, 224, 127) 49.37%, rgba(106, 224, 127, 0.5) 100%)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemPositive())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(106, 224, 127)');
  }));

  qase(155, it('should update Sentiment chart on Legend button click', () => {
    sentimentChart.positiveChartArea().should('be.visible');
    sentimentChart.negativeChartArea().should('be.visible');
    sentimentChart.neutralChartArea().should('be.visible');
    sentimentChart.scoreChartLine().should('be.visible');
    sentimentChart.legendItemPositive().should('be.visible');

    sentimentChart.legendItemPositive().realClick();
    sentimentChart.averageValue().realHover('mouse');
    sentimentChart.legendItemPositive()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'none')
      .before('background')
      .should('contain', 'rgba(0, 0, 0, 0) linear-gradient(rgb(106, 224, 127) 49.37%, rgba(106, 224, 127, 0.5) 100%)');

    sentimentChart.getLegendHideIcon(sentimentChart.legendItemPositive())
      .should('have.css', 'color', 'rgb(106, 224, 127)');

    sentimentChart.getLegendShowIcon(sentimentChart.legendItemPositive())
      .should('have.css', 'display', 'none');

    sentimentChart.positiveChartArea().should('not.be.visible');

    cy.wait(2000);

    sentimentChart.legendItemRelease().realClick();
    sentimentChart.averageValue().realHover('mouse');
    sentimentChart.legendItemRelease()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'none')
      .before('background-color')
      .should('eq', 'rgb(152, 145, 252)');

    sentimentChart.getLegendHideIcon(sentimentChart.legendItemRelease())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(152, 145, 252)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemRelease())
      .should('have.css', 'display', 'none');

    sentimentChart.releaseIcons('apple').should('not.be.visible');
    sentimentChart.positiveChartArea().should('not.be.visible');

    cy.wait(2000);

    sentimentChart.legendItemNegative().realClick();
    sentimentChart.averageValue().realHover('mouse');
    sentimentChart.legendItemNegative()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'none')
      .before('background')
      .should('contain', 'linear-gradient(rgb(255, 0, 67) 49.37%, rgba(255, 0, 93, 0.5) 100%) ');
    sentimentChart.getLegendHideIcon(sentimentChart.legendItemNegative())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(255, 0, 67)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemNegative())
      .should('have.css', 'display', 'none');
    sentimentChart.releaseIcons('apple').should('not.be.visible');
    sentimentChart.positiveChartArea().should('not.be.visible');
    sentimentChart.negativeChartArea().should('not.be.visible');

    cy.wait(2000);

    sentimentChart.legendItemNeutral().realClick();
    sentimentChart.averageValue().realHover('mouse');
    sentimentChart.legendItemNeutral()
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'none')
      .before('background-color')
      .should('contain', 'rgb(219, 221, 228)');
    sentimentChart.getLegendHideIcon(sentimentChart.legendItemNeutral())
      .should('have.css', 'opacity', '1')
      .and('have.css', 'color', 'rgb(219, 221, 228)');
    sentimentChart.getLegendShowIcon(sentimentChart.legendItemNeutral())
      .should('have.css', 'display', 'none');

    sentimentChart.releaseIcons('apple').should('not.be.visible');
    sentimentChart.positiveChartArea().should('not.be.visible');
    sentimentChart.negativeChartArea().should('not.be.visible');
    sentimentChart.neutralChartArea().should('not.be.visible');
  }));

  qase(156, it('should be able toggle Legends buttons by clicking on Toggle legends button', () => {
    sentimentChart.legendItemRelease().should('be.visible');
    sentimentChart.legendItemNegative().should('be.visible');
    sentimentChart.legendItemNeutral().should('be.visible');
    sentimentChart.legendItemPositive().should('be.visible');

    sentimentChart.legendsToggleBtn().realClick();

    sentimentChart.legendItemNegative().should('not.be.visible');
    sentimentChart.legendItemNeutral().should('not.be.visible');
    sentimentChart.legendItemPositive().should('not.be.visible');

    sentimentChart.legendsToggleBtn().realClick();

    sentimentChart.legendItemRelease().should('be.visible');
    sentimentChart.legendItemNegative().should('be.visible');
    sentimentChart.legendItemNeutral().should('be.visible');
    sentimentChart.legendItemPositive().should('be.visible');
  }));

  qase(157, it('should be able to display Glossary for chart', () => {
    sentimentChart.glossaryBtn().click();
    contextMenu.contextContent().should('be.visible');

    contextMenu.headerTitle().should('have.text', 'Sentiment score');
    contextMenu.contextContent().then((element) => {
      expect(element.text().trim().replace(/[\n\r\t\s]+/g, ' '))
        .to.contain('The Sentiment Score tells you if your customer base is expressing negative, neutral, or positive attitudes towards your game overall.')
        .and.to.contain('The score is measured on a scale of 0-100.')
        .and.to.contain('Negative Sentiment: 0 to 33, with 0 being the most negative')
        .and.to.contain('Neutral Sentiment: 34 to 66, with 50 representing true neutrality or ambiguity')
        .and.to.contain('Positive Sentiment: 67 to 100, with 100 being the most positive')
        .and.to.contain('It is calculated using an ML-powered natural language processing model. The model can handle expletives and certain edge cases such as sarcasm to some degree.')
        .and.to.contain('*The overall Sentiment score and chart displays all individuals speaking about your game.');
    });
  }));

  qase(158, it('should be able change state of Channel switcher on hover', () => {
    sentimentChart.channelSwitcherBtn().realHover('mouse');

    sentimentChart.channelSwitcherBtn().parent()
      .should('have.css', 'opacity', '1')
      .and('have.css', 'background-color', 'rgb(241, 244, 246)')
      .and('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.05) 0px 10px 40px 0px');
  }));

  qase(159, it('should be able open Channel switcher and hover over available items', () => {
    sentimentChart.channelSwitcherBtn().realClick();

    sentimentChart.channelSwitcherBtn().parent()
      .should('have.css', 'opacity', '1')
      .and('have.css', 'border-radius', '6px 6px 0px 0px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 0px 2px 8px 0px');

    sentimentChart.channelSwitcherBtn().parent().next()
      .should('be.visible')
      .should('have.css', 'background-color', 'rgb(241, 244, 246)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.12) 0px 30px 40px 0px')
      .and('have.css', 'border-radius', '0px 0px 6px 6px')
      .and('have.css', 'padding', '4px');

    sentimentChart.channelSwitcherOption('All channels')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(29, 48, 84)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '800')
      .parent()
      .should('have.css', 'border-radius', '40px')
      .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.5)');

    sentimentChart.channelSwitcherOption('Twitter')
      .should('be.visible');

    sentimentChart.channelSwitcherOption('Apple App Store')
      .should('be.visible');

    sentimentChart.channelSwitcherOption('Twitter')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '700')
      .parent()
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');

    sentimentChart.channelSwitcherOption('Twitter').realHover('mouse');
    sentimentChart.channelSwitcherOption('Twitter')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '700')
      .parent()
      .should('have.css', 'border-radius', '40px')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)');

    sentimentChart.channelSwitcherOption('Apple App Store').realHover('mouse');
    sentimentChart.channelSwitcherOption('Apple App Store')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '700')
      .parent()
      .should('have.css', 'border-radius', '40px')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)');
  }));

  qase(160, it('should be able update Sentiment chart on Channel switcher item click', () => {
    sentimentChart.channelSwitcherBtn().realClick();
    sentimentChart.channelSwitcherOption('Twitter').realClick();
    cy.wait(1000);

    sentimentChart.channelSwitcherBtn().realClick();
    sentimentChart.channelSwitcherOption('Apple App Store').realClick();
    cy.wait(1000);

    sentimentChart.channelSwitcherBtn().realClick();
    sentimentChart.channelSwitcherOption('All channels').realClick();
    cy.wait(1000);

    // Nothing to verify here, just check that chart is updated
  }));

  qase(161, it('should be able display release title on release icon hover', () => {
    sentimentChart.switchToChannel('Apple App Store');
    sentimentChart.timelineQuarterBtn().realClick().wait(1000);

    const icon = sentimentChart.releaseIcons('apple').first();
    icon.realHover('mouse');

    icon.should('have.css', 'opacity', '1')
      .and('have.css', 'border-radius', '50%')
      .and('have.css', 'background-color', 'rgb(152, 145, 252)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');

    sentimentChart.releaseTooltip().should('be.visible')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'filter', 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 5px)')
      .and('have.css', 'border-radius', '8px')
      // TODO create ticket for this issue
      // .and('have.css', 'padding', '12px 16px')
      .and('have.css', 'color', 'rgb(29, 48, 84)');

    sentimentChart.releaseTooltipArror().should('be.visible');
    sentimentChart.releaseTooltipLink().should('be.visible')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'font-weight', '500');
  }));

  qase(162, it('should be display Release detail on release icon click', () => {
    sentimentChart.switchToChannel('Apple App Store');
    sentimentChart.timelineQuarterBtn().realClick().wait(1000);

    sentimentChart.releaseIcons('apple').first().realClick();

    sentimentChart.releaseTabTitle('Apple App Store').should('be.visible')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '22px')
      .and('have.css', 'font-weight', '700');

    sentimentChart.releaseTabTitleIcon('Apple App Store').should('be.visible');

    sentimentChart.releaseTabCloseBtn().should('be.visible')
      .should('have.css', 'position', 'absolute')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border', '0px none rgb(29, 48, 84)')
      .and('have.css', 'color', 'rgb(29, 48, 84)')
      .and('have.css', 'opacity', '0.4');

    sentimentChart.releaseTabContent().should('be.visible')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '18px 24px 0px');

    sentimentChart.releaseTabReleaseTitle().should('be.visible')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '22px')
      .and('have.css', 'font-weight', '800');

    sentimentChart.releaseTabReleaseTitleLink().should('be.visible')
      .and('not.be.be.empty');

    sentimentChart.releaseTabDescription().should('be.visible')
      .should('have.css', 'color', 'rgb(19, 61, 102)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '24px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'margin', '8px 0px 24px')
      .and('not.be.be.empty');

    sentimentChart.releaseTabCloseBtn().realClick();
    sentimentChart.releaseTabContent().should('not.exist');

    sentimentChart.releaseIcons('apple').first().realHover('mouse');
    sentimentChart.releaseTooltip().should('be.visible');
    sentimentChart.releaseTooltipLink().should('be.visible');
  }));

  qase(163, it('should be able to read Sentiment chart detail tooltip on datapoint hover', () => {
    sentimentChart.timelineMonthBtn().realClick().wait(1000);
    sentimentChart.chartDatapoint().eq(3).realHover('mouse');

    sentimentChart.chartDatapointTooltip().should('be.visible')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'filter', 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 5px)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '12px 12px 8px')
      .and('have.css', 'color', 'rgb(29, 48, 84)');

    sentimentChart.chartDatapointTooltipNegative().should('be.visible')
      .and('not.be.empty');
    sentimentChart.chartDatapointTooltipPositive().should('be.visible')
      .and('not.be.empty');
    sentimentChart.chartDatapointTooltipNeutral().should('be.visible')
      .and('not.be.empty');
    sentimentChart.chartDatapointTooltipSentiment().should('be.visible')
      .and('not.be.empty');

    sentimentChart.chartDatapointTooltipValueType().should('be.visible')
      .should('have.css', 'font-weight', '500')
      .and('not.be.empty');

    sentimentChart.chartDatapointTooltipValueVolume().should('be.visible')
      .should('have.css', 'font-weight', '700');

    sentimentChart.chartDatapointTooltipValuePercentage().should('be.visible')
      .should('have.css', 'font-weight', '500')
      .and('not.be.empty');

    sentimentChart.chartDatapointLink().should('be.visible')
      .should('have.css', 'color', 'rgb(102, 145, 186)')
      .and('have.css', 'font-size', '12px')
      .and('have.css', 'line-height', '14px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'justify-content', 'space-evenly');

    sentimentChart.chartDatapoint().eq(4).realHover('mouse').wait(1000);
    sentimentChart.chartDatapointTooltip().should('be.visible');
  }));

  qase(165, it('should be navigate to Conversation threads on Sentiment chart date click', () => {
    sentimentChart.timelineWeekBtn().realClick().wait(1000);
    sentimentChart.chartDatapoint().eq(3).realHover('mouse').realClick();

    conversationThreadsPage.pageTitle().should('be.visible');
  }));

  qase(164, it('should preserve Sentiment chart settings on navigation', () => {
    sentimentChart.timelineMonthBtn().realClick();
    sentimentChart.switchToChannel('Apple App Store');
    sentimentChart.legendItemNegative().realClick();
    sentimentChart.legendsToggleBtn().realClick();

    sentimentChart.positiveChartArea().should('be.visible');
    sentimentChart.neutralChartArea().should('be.visible');
    sentimentChart.negativeChartArea().should('not.be.visible');

    sentimentChart.channelSwitcherBtn().should('have.have.text', 'Apple App Store');

    sentimentChart.legendItemNegative().should('not.be.visible');
    sentimentChart.legendItemNeutral().should('not.be.visible');
    sentimentChart.legendItemPositive().should('not.be.visible');
    sentimentChart.legendItemRelease().should('not.be.visible');

    sentimentChart.timelineMonthBtn()
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgb(19, 61, 102)')
      .wait(1000); // chart needs to be updated;

    sentimentChart.chartDatapoint().eq(10).realHover('mouse').realClick();
    conversationThreadsPage.backBtn().realClick();
    sentimentChart.sentimentChart().scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } });

    sentimentChart.positiveChartArea().should('be.visible');
    sentimentChart.neutralChartArea().should('be.visible');
    sentimentChart.negativeChartArea().should('not.be.visible');

    sentimentChart.channelSwitcherBtn().should('have.have.text', 'Apple App Store').realHover('mouse');

    sentimentChart.legendItemNegative().should('not.be.visible');
    sentimentChart.legendItemNeutral().should('not.be.visible');
    sentimentChart.legendItemPositive().should('not.be.visible');
    sentimentChart.legendItemRelease().should('not.be.visible');

    sentimentChart.timelineMonthBtn()
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgb(19, 61, 102)');

    sentimentChart.chartDatapoint().eq(3).realHover('mouse').realClick();
    cy.go('back');

    sentimentChart.sentimentChart().scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } }).wait(1000);

    sentimentChart.positiveChartArea().should('be.visible');
    sentimentChart.neutralChartArea().should('be.visible');
    sentimentChart.negativeChartArea().should('not.be.visible');

    sentimentChart.channelSwitcherBtn().should('have.have.text', 'Apple App Store').realHover('mouse');

    sentimentChart.legendItemNeutral().should('not.be.visible');
    sentimentChart.legendItemPositive().should('not.be.visible');
    sentimentChart.legendItemRelease().should('not.be.visible');
    sentimentChart.legendItemNegative().should('not.be.visible');

    sentimentChart.timelineMonthBtn()
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '800')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'background-color', 'rgb(19, 61, 102)');
  }));

  // Skip becuase we cannot ensure there are no data for the selected period
  qase(166, it.skip('should display empty Sentiment chart if no data available', () => {
    sentimentChart.timelineDayBtn().realClick();

    sentimentChart.sentimentChart().should('be.visible'); // Check if Sentiment chart is visible
    sentimentChart.sentimentChartTitle().should('be.visible'); // Check if Sentiment chart title is visible
    sentimentChart.channelSwitcherBtn().should('be.visible'); // Check if Channel switcher button is visible
    sentimentChart.legendsToggleBtn().should('not.exist'); // Check if Legends toggle button is visible
    sentimentChart.legendItemRelease().should('not.exist'); // Check if Release legend item is visible
    sentimentChart.legendItemPositive().should('not.exist'); // Check if Positive legend item is visible
    sentimentChart.legendItemNeutral().should('not.exist'); // Check if Neutral legend item is visible
    sentimentChart.legendItemNegative().should('not.exist'); // Check if Negative legend item is visible
    sentimentChart.glossaryBtn().should('be.visible'); // Check if Glossary button is visible
    sentimentChart.timelineDayBtn().should('be.visible'); // Check if Timeline Day button is visible
    sentimentChart.timelineWeekBtn().should('be.visible'); // Check if Timeline Week button is visible
    sentimentChart.timelineMonthBtn().should('be.visible'); // Check if Timeline Month button is visible
    sentimentChart.timelineQuarterBtn().should('be.visible'); // Check if Timeline Quarter button is visible
    sentimentChart.timelineYearBtn().should('be.visible'); // Check if Timeline Year button is visible
    sentimentChart.timelineAllBtn().should('be.visible'); // Check if Timeline All button is visible
    sentimentChart.averageValue().should('be.visible').and('have.text', '-'); // Check if Average value is visible
    sentimentChart.scoreTimeRange().should('be.visible'); // Check if Score time range is visible
    sentimentChart.positiveChartArea().should('not.exist'); // Check if Positive chart area is visible
    sentimentChart.neutralChartArea().should('not.exist'); // Check if Neutral chart area is visible
    sentimentChart.negativeChartArea().should('not.exist'); // Check if Negative chart area is visible

    sentimentChart.chartNoDataArea().should('be.visible'); // Check if No data area is visible
    sentimentChart.chartNoDataArea().realHover('mouse'); // Hover over No data area
    cy.contains('No data has been collected for this time.').should('be.visible'); // Check if No data tooltip is visible

    sentimentChart.sentimentChart().visualRegressionSnapshotElement('Sentiment chart - Day - No data'); // Take a snapshot of Sentiment chart
  }));
});
