import forgotPasswordPage from '../../pages/forgot-password.page';
import headerMenu from '../../pages/components/header-menu.component';

describe('Login Page', () => {
  before(() => {
    headerMenu.logout();
  });

  beforeEach(() => {
    forgotPasswordPage.visit();
  });

  it('should have Reset password button in invalid state without adding email', () => {
    forgotPasswordPage.resetPasswordBtn().should('be.disabled');
  });

  it('should display Invalid email msg after inserting invalid email address', () => {
    forgotPasswordPage.emailInput().type('dingbooms');
    forgotPasswordPage.emailInput().blur();

    forgotPasswordPage.invalidEmalMsg().should('be.visible');
    forgotPasswordPage.cleanForm();
  });

  it('should display Invalid user msg after inserting nonexisting email address and process visual page validation', () => {
    forgotPasswordPage.emailInput().type('dingbooms@dingsbooms.com');
    forgotPasswordPage.resetPasswordBtn().click();
    forgotPasswordPage.invalidUserMsg().should('be.visible');
    cy.visualRegressionSnapshot('email not found');
  });
});
