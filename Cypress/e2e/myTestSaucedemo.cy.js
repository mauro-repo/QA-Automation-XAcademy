const users = require('../fixtures/users.json');

describe('Saucedemo', { testIsolation: false }, () => {
  users.forEach(user => {
    it(`LogIn ${user.username}`, () => {
      cy.login(user.username, user.password);
    });
    it(`Agragar al carrito`, () => {
      cy.addToCart();
    });
    it(`Confirmar compra`, () => {
      cy.checkout();
    });
    it(`LogOut`, () => {
     cy.logout();
    });
  });
});