/// <reference types="cypress" />

class ForgotPasswordPage {
  resetPasswordBtn() {
    return cy.get('button').contains('Send password reset email');
  }

  emailInput() {
    return cy.get('input[name=email]');
  }

  invalidEmalMsg() {
    return cy.contains('Not a valid email address');
  }

  invalidUserMsg() {
    return cy.contains('User with this email not found');
  }

  visit() {
    return cy.visit('/forgot-pass');
  }

  cleanForm() {
    return this.emailInput().clear();
  }
}

export default new ForgotPasswordPage();
