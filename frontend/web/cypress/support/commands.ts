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

Cypress.Commands.add('login', () => {
  window.localStorage.clear();
  cy.request('POST', 'http://localhost:4000/api/users/login', {
    email: Cypress.env('email'),
    name: Cypress.env('name'),
    userId: Cypress.env('userId'),
  }).then((res) => {
    cy.log(res.body.jwt);
    window.localStorage.setItem(
      'docId-store',
      JSON.stringify({
        state: {
          docId: res.body.did,
          token: res.body.jwt,
          expiresIn: res.body.exp,
        },
        version: 0,
      })
    );
  });
});
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
