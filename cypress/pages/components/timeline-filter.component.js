/// <reference types="cypress" />

class TimelineFilterComponent {
  timelineFilterToogler() {
    return cy.get('[data-testid="filter-by-date"');
  }

  timelineFilterTooglerWrapper() {
    return this.timelineFilterToogler().children().children();
  }

  timelineFilteWrapperExpanded() {
    return cy.get('[class^="_filter__wrapper_"]');
  }

  timelineFilterTitle() {
    return cy.get('[data-testid="filter-title"]');
  }

  yesterdayBtn() {
    return cy.get('[data-testid="yesterday-option"]');
  }

  pastWeekBtn() {
    return cy.get('[data-testid="past-week-option"]');
  }

  pastTwoWeeksBtn() {
    return cy.get('[data-testid="past-two-weeks-option"]');
  }

  pastMonthBtn() {
    return cy.get('[data-testid="past-month-option"]');
  }

  pastQuarterBtn() {
    return cy.get('[data-testid="past-quarter-option"]');
  }

  pastYearBtn() {
    return cy.get('[data-testid="past-year-option"]');
  }

  customDateBtn() {
    return cy.get('[data-testid="custom-option"]');
  }

  startDateInput() {
    return cy.get('[name="startInputValue"]');
  }

  wrongDateFormatMsg() {
    return cy.contains('Please format: mm/dd/yyyy');
  }

}

export default new TimelineFilterComponent();