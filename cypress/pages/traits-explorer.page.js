/// <reference types="cypress" />

class QualitysExplorerPage {
  // Page elements

  cultureMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-culture"]');
  }

  valuesMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-values"]');
  }

  communicationMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-communication"]');
  }

  personalityMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-personality"]');
  }

  motivationMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-motivation"]');
  }

  competitivenessMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-competitiveness"]');
  }

  activitiesMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-activities"]');
  }

  hopesAspirationsMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-hopes&aspirations"]');
  }

  painPointsMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-painpoints"]');
  }

  techUsageMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-techusage"]');
  }

  emotionsMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-emotions"]');
  }

  wellBeingMenuItem() {
    return cy.get('[data-testid="qualitys-menu-item-well-being"]');
  }

  topActionTitle() {
    return cy.get('[data-testid="top-action-subtitle"]');
  }

  topActionBtn() {
    return cy.get('[data-testid="top-action-button"]');
  }

  switchQuality(quality) {
    switch (quality) {
      case 'Culture':
        this.cultureMenuItem().click();
        break;
      case 'Values':
        this.valuesMenuItem().click();
        break;
      case 'Communications':
        this.communicationMenuItem().click();
        break;
      case 'Personality':
        this.personalityMenuItem().click();
        break;
      case 'Motivation':
        this.motivationMenuItem().click();
        break;
      case 'Competitiveness':
        this.competitivenessMenuItem().click();
        break;
      case 'Activities':
        this.activitiesMenuItem().click();
        break;
      case 'Hopes & Aspirations':
        this.hopesAspirationsMenuItem().click();
        break;
      case 'Pain Points':
        this.painPointsMenuItem().click();
        break;
      case 'Tech Usage':
        this.techUsageMenuItem().click();
        break;
      case 'Emotions':
        this.emotionsMenuItem().click();
        break;
      case 'Well-Being':
        this.wellBeingMenuItem().click();
        break;
      default:
        break;
    }
  }
}

export default new QualitysExplorerPage();
