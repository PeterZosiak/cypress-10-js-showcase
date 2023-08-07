/// <reference types="cypress" />

class LoginPage {
  // Page objects

  emailInput() {
    return cy.get('input[name=email]');
  }

  passwordInput() {
    return cy.get('input[name=password]');
  }

  loginBtn() {
    return cy.get('button').contains('Login');
  }

  invalidEmalMsg() {
    return cy.contains('Not a valid email address');
  }

  invalidPassword8CharsMsg() {
    return cy.contains('Password must contain at least 8 characters');
  }

  invalidPasswordUppercaseMsg() {
    return cy.contains('Password must contain one upper case.');
  }

  invalidPasswordSpecialCharMsg() {
    return cy.contains('Password must contain one special character');
  }

  invalidPasswordOrEmailMsg() {
    return cy.contains('We do not recognize your email or password.');
  }

  visit() {
    cy.visit('/login');
  }

  cleanLoginFrom() {
    this.emailInput().clear();
    this.passwordInput().clear();
  }
}

export default new LoginPage();