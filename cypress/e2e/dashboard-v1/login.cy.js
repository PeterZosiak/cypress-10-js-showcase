import { qase } from 'cypress-qase-reporter/dist/mocha';
import loginPage from '../../pages/login.page';
import headerMenu from '../../pages/components/header-menu.component';

describe('Login Page', () => {
  before(() => {
    headerMenu.logout();
  });

  qase([1], it('should have Login button in invalid state without adding email and password', () => {
    loginPage.visit();
    loginPage.loginBtn().should('be.disabled');
  }));

  qase([2], it('should display Invalid email msg after inserting invalid email address and process visual page validation', () => {
    loginPage.visit();
    loginPage.emailInput().type('dingbooms');
    loginPage.emailInput().blur();

    loginPage.invalidEmalMsg().should('be.visible');
    loginPage.loginBtn().should('be.disabled');
    cy.visualRegressionSnapshot('Invalid Email');
    loginPage.cleanLoginFrom();
  }));

  qase([3], it('should display Invalid password 8 characters msg after inserting invalid password and process visual page validation', () => {
    loginPage.visit();
    loginPage.passwordInput().type('dings');
    loginPage.passwordInput().blur();

    loginPage.invalidPassword8CharsMsg().should('be.visible');
    loginPage.loginBtn().should('be.disabled');
    cy.visualRegressionSnapshot('Invalid Password 8 characters');
    loginPage.cleanLoginFrom();
  }));

  it('should display Invalid password Missing uppercase character msg after inserting invalid password and process visual page validation', () => {
    loginPage.visit();
    loginPage.passwordInput().type('dingsbooms');
    loginPage.passwordInput().blur();

    loginPage.invalidPasswordUppercaseMsg().should('be.visible');
    loginPage.loginBtn().should('be.disabled');

    cy.visualRegressionSnapshot('Invalid Password Uppecase');
    loginPage.cleanLoginFrom();
  });

  it('should display Invalid password Missing special character msg after inserting invalid password and process visual page validation', () => {
    loginPage.visit();

    loginPage.passwordInput().type('D1ngsbooms');
    loginPage.passwordInput().blur();

    loginPage.invalidPasswordSpecialCharMsg().should('be.visible');
    loginPage.loginBtn().should('be.disabled');

    cy.visualRegressionSnapshot('Invalid Password Special Char');
    loginPage.cleanLoginFrom();
  });

  it('should display Invalid password or Email msg after inserting invalid email address or password and process visual page validation', () => {
    loginPage.visit();
    loginPage.emailInput().type('dings@booms.com');
    loginPage.passwordInput().type('D!ngs8ooms');

    loginPage.loginBtn().click();
    loginPage.invalidPasswordOrEmailMsg().should('be.visible');
    cy.visualRegressionSnapshot('Invalid Password or Email');
    loginPage.cleanLoginFrom();
  });
});
