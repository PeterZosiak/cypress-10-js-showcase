/// <reference types="cypress" />
import HeaderMenuComponent from './components/header-menu.component';

class AccountSettingsPage {
  audienceListItems() {
    return cy.get('[data-testid="aud-wrap"]');
  }

  inviteTeamMemberBtn() {
    return cy.contains('Invite team member');
  }

  inviteTeamMemberCloseBtn() {
    return cy.get('[data-testid="button-icon"]');
  }

  inviteUserToAudienceInput() {
    return cy.get('[placeholder="Add or invite someone...');
  }

  addUserBtn() {
    return cy.get('button').contains('Add user').parent();
  }

  existingUsers() {
    return cy.get('[class^="_selected-users-title"]')
  }

  teamMemberEmailInput() {
    return cy.get('[placeholder="Enter email"]');
  }

  teamMemberAudienceInput() {
    return cy.get('[placeholder="Search audiences"]');
  }

  teamMemberInviteBtn() {
    return cy.get('[data-testid="global-btn"]').contains('Send invite');
  }

  companyNameInput() {
    return cy.get('[name="companyName"]');
  }

  companyAddressInput() {
    return cy.get('[placeholder="Type company address"]');
  }

  companyLogoInput() {
    return cy.get('[id="upload-image-input-file-account-avatar"]');
  }

  companySaveDetailsBtn() {
    return cy.get('[data-testid="global-btn"]').contains('Save settings').parent();
  }

  openTab(tabName) {
    cy.get(`[data-testid="tab-item ${tabName}"]`).click();
  }

  visit() {
    HeaderMenuComponent.visitAccountSettings();
  }

  manageAudienceItem(index = 1) {
    this.audienceListItems().eq(index).trigger('mouseover');
    this.audienceListItems().eq(index).find('[data-testid="threeDots"]').click();
    cy.contains('Edit users').click();
  }

  inviteUserToAudience(email) {
    this.manageAudienceItem(1);
    this.inviteUserToAudienceInput().type(email);

    this.addUserBtn().click()
    this.existingUsers().next().should('not.be.empty');
  }

  inviteTeamMember(email) {
    this.inviteTeamMemberBtn().click();
    this.teamMemberEmailInput().type(email);
    this.teamMemberAudienceInput().type('data');
    cy.contains('crafted dataset 1').click();

  }

  updateCompanyDetails(companyName, companyAddress) {
    this.companyNameInput().clear().type(companyName);
    this.companyAddressInput().clear().type(companyAddress).wait(1000);
    this.companyAddressInput().next().get('[role="option"]').first().click();
    this.companySaveDetailsBtn().click();
  }

}

export default new AccountSettingsPage;