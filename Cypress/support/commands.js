// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.get('.inventory_item_name').should('exist');
    cy.wait(500);
  });
  
  Cypress.Commands.add('addToCart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').click();
    cy.get('.item_pricebar > .btn_secondary').should('exist');
    cy.wait(500)
  });
  
  Cypress.Commands.add('checkout', () => {
    cy.get('.btn_action').click();
    cy.get('[data-test="firstName"]').type('Juan');
    cy.wait(500);
    cy.get('[data-test="lastName"]').type('Perez');
    cy.wait(500);
    cy.get('[data-test="postalCode"]').type('1234');
    cy.wait(500);
    cy.get('.btn_primary').click();
    cy.get('.btn_action').should('exist');
    cy.get('.btn_action').click();
    cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    cy.wait(500);
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('#login-button').should('exist');
    cy.wait(500); 
  });
