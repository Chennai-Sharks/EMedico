/* eslint-disable jest/valid-expect-in-promise */
context('Authentication', () => {
  it('checks for failing authentication request to server', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: 'http://localhost:4000/api/users/login',
      body: {
        name: Cypress.env('name'),
        userId: Cypress.env('userId'),
      },
    }).then((res) => {
      expect(res).property('status').to.equal(400);
    });
  });

  it('successfully loads and authentication is done and then navigated to home page', () => {
    cy.visit('/');
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

    cy.visit('/home');
  });
});
