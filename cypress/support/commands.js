const LOCAL_STORAGE_MEMORY = {};
import { SettingsMenuSelector, CardViewToggleSelector, ListViewToggleSelector } from './global-selectors'
import homePage from '../pages/home.page';

Cypress.Commands.add('openMenuSelect', (type = 'card') => {
  cy.get(SettingsMenuSelector).click();
  if (type === 'card') {
    cy.get(CardViewToggleSelector).click();
  } else if (type === 'list') {
    cy.get(ListViewToggleSelector).click();
  }
});

Cypress.Commands.add('closeMenuSelect', () => {
  cy.get(SettingsMenuSelector).click();
});

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

// don't reload when navigating the app by using this command
Cypress.Commands.add('goToRoute', (route = '') => {
  cy.window().then((win) => {
    win.history.pushState({}, `${route}`, route);
  });
});

Cypress.Commands.add('navigateToGame', (name = '') => {
  cy.visit('/home');
  homePage.navigateToGame(name);
});

Cypress.Commands.add('visualRegressionSnapshot', (name = '', options = {}) => {
  if (Cypress.env('shouldDoVisualRegression') && cy.percySnapshot) {
    cy.percySnapshot(name, options);
  }
});

function scope(documentClone, selector) {
  const element = documentClone.querySelector(selector);
  // eslint-disable-next-line no-param-reassign
  documentClone.querySelector('body').innerHTML = element.outerHTML;
  return documentClone;
}

Cypress.Commands.add('visualRegressionSnapshotElement', { prevSubject: true }, (subject, name, options) => {
  if (Cypress.env('shouldDoVisualRegression') && cy.percySnapshot) {
    cy.percySnapshot(name, {
      domTransformation: (documentClone) => scope(documentClone, subject.selector),
      ...options,
    });
  }
});

Cypress.Commands.add('logout', () => {

});

Cypress.Commands.add('login', (loginUrl = '/login', email, password) => {
  const { baseUrl } = Cypress.config();
  if (!email) {
    email = Cypress.env('email');
  }
  if (!password) {
    password = Cypress.env('password');
  }

  function logMeIn(email, password, baseUrl, loginUrl) {
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);

    // We need to wait becuase SSO redirects
    cy.contains('Login').click().wait(1500);
    cy.url({ timeout: 10000 }).should('contain', `${Cypress.env('baseUrl')}${loginUrl}`);
  }

  cy.visit(loginUrl).then(() => {
    cy.wait(500).url().then((url) => {
      if (url.includes('login')) {
        logMeIn(email, password, baseUrl, loginUrl);
      }
    });
  })
});

Cypress.Commands.add('openPageFromMenu', (pageTitle) => {
  return cy.get('[data-testid="app-menu-toggler"]')
    .click().then(() => {
      cy.contains(pageTitle).click();
    });
});

Cypress.Commands.add('cssDisableMotion', (selector = 'head') => {
  cy.get('html').then(() => {
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
      <style>
        /* Disable CSS transitions. */
        * { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important; }
        /* Disable CSS animations. */
        * { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; }
        /* Reset values on non-opaque/offscreen framer-motion components. */
        *[style*="opacity"] { opacity: 1 !important; }
        *[style*="transform"] { transform: none !important; }
      </style>
    `);
  });
});

function unquote(str) {
  return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
  'before',
  {
    prevSubject: 'element',
  },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'before');
    return unquote(before.getPropertyValue(property));
  },
);


// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})