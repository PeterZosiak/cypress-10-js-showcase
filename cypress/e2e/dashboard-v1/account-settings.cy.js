import accountSettingsPage from '../../pages/account-settings.page';
import Utils from '../../support/utils';

const utils = new Utils();

describe('Account Settings page', () => {
  const { baseUrl } = Cypress.config();

  beforeEach(() => {
    window.localStorage.setItem('assessmentFTUEStep', 3);
    cy.login('/account-settings');
  });

  it('should open Account settings page and process visual page validation', () => {
    cy.url({ timeout: 10000 }).should('eq', `${baseUrl}/account-settings`);
    cy.contains('Settings');
    cy.contains('My Profile');
    cy.visualRegressionSnapshot('Account Settings - My Profile');
  });

  it('should open Audiences tab on Account settings page and process visual page validation', () => {
    accountSettingsPage.openTab('Audiences');

    cy.contains('Settings');
    cy.contains('Manage Audiences');
    cy.visualRegressionSnapshot('Account Settings - Audiences');
  });

  it('should be able to add Team member for Audience item on Account settings page', () => {
    accountSettingsPage.openTab('Audiences');

    const email = utils.getRandomEmail();

    accountSettingsPage.inviteUserToAudience(email);
    cy.contains('Edit users assigned to');
    cy.contains(email);
    accountSettingsPage.addUserBtn().should('be.disabled');
    accountSettingsPage.inviteUserToAudienceInput().should('have.value', '');
  });

  it('should open My Team tab on Account settings page and process visual page validation', () => {
    accountSettingsPage.openTab('My Team');

    cy.contains('Settings');
    cy.contains('Team members');
    cy.visualRegressionSnapshot('Account Settings - My Team');
  });

  it('should be able to Invite team member to My team and process visual page validation', () => {
    accountSettingsPage.openTab('My Team');

    const email = utils.getRandomEmail();
    accountSettingsPage.inviteTeamMember(email);

    cy.contains('Invite a team member and assign to a');
    accountSettingsPage.teamMemberEmailInput().should('be.visible');
    accountSettingsPage.teamMemberAudienceInput().should('be.visible');
    cy.visualRegressionSnapshot('Account Settings - Invite Team');
    accountSettingsPage.teamMemberInviteBtn().should('not.be.disabled');
    accountSettingsPage.teamMemberInviteBtn().click();
  });

  it('should open Account tab on Account settings page and process visual page validation', () => {
    accountSettingsPage.openTab('Account');

    cy.contains('Company information');
    accountSettingsPage.companyNameInput().should('be.visible');
    accountSettingsPage.companyAddressInput().should('be.visible');
    accountSettingsPage.companyLogoInput().should('exist');
    accountSettingsPage.companySaveDetailsBtn().should('be.visible');
    cy.visualRegressionSnapshot('Account Settings - Account');
  });

  it('should able to update Company details on Account settings page', () => {
    accountSettingsPage.openTab('Account');

    const companyAddress = utils.getRandomCity();

    accountSettingsPage.updateCompanyDetails('e2e', companyAddress);
    // we need to wait for update cache
    cy.wait(30000).reload();

    accountSettingsPage.companyNameInput().should('have.value', 'e2e');
    accountSettingsPage.companyAddressInput().invoke('val').should('contain', companyAddress);
  });

  it('should open Billing tab on Account settings page and process visual page validation', () => {
    accountSettingsPage.openTab('Billing');
    cy.contains('Billing summary');
    cy.visualRegressionSnapshot('Account Settings - Billing');
  });
});
