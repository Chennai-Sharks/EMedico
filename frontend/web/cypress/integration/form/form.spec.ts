import { section1FormModel } from '../../support/Section1FormModel';
import { section2FormModel } from '../../support/Section2FormModel';
import { section3FormModel } from '../../support/Section3FormModel';

context('Testing form', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Filling Section 1 Form', () => {
    const typingConfig: Record<string, any> = {
      delay: 0,
      force: true,
    };

    cy.visit('/home');

    cy.contains('Add Patient').click();

    section1FormModel.forEach((item) => {
      if (item.type === 'textfield') {
        if (item.name === 'age' || item.name === 'phoneNumber')
          cy.get(`#${item.name}`).type('1299', typingConfig);
        else if (item.name === 'dpid') {
          // date is used for generating somewhat unique stuff for dpid
          cy.get(`#${item.name}`).type(new Date().toISOString(), typingConfig);
        } else cy.get(`#${item.name}`).type('test text', typingConfig);
      } else if (item.type === 'radio') {
        cy.get(`#${item.name}-yes`).click();
      } else if (item.type === 'dropdown') {
        cy.get(`#${item.name}`)
          .click({ force: true })
          .get(`#${item.name}-${item.props[0]}`)
          .click();
      }
    });

    cy.contains('Next Section').click();
  });

  it('Filling Section 2 Form', () => {
    const typingConfig: Record<string, any> = {
      delay: 0,
      force: true,
    };

    cy.contains('Back').click();
    cy.contains('Next Section').click();

    section2FormModel.forEach((item) => {
      if (item.type === 'textfield') {
        if (item.name === 'age' || item.name === 'phoneNumber')
          cy.get(`#${item.name}`).type('1299', typingConfig);
        else if (item.name === 'dpid') {
          // date is used for generating somewhat unique stuff for dpid
          cy.get(`#${item.name}`).type(new Date().toISOString(), typingConfig);
        } else cy.get(`#${item.name}`).type('test text', typingConfig);
      } else if (item.type === 'radio') {
        cy.get(`#${item.name}-yes`).click();
      } else if (item.type === 'dropdown') {
        cy.get(`#${item.name}`)
          .click({ force: true })
          .get(`#${item.name}-${item.props[0]}`)
          .click();
      }
    });

    cy.contains('Next Section').click();
  });

  it('Filling Section 3 Form and submitting it to the server successfully', () => {
    const typingConfig: Record<string, any> = {
      delay: 0,
      force: true,
    };

    cy.contains('Back').click();
    cy.contains('Next Section').click();

    section3FormModel.forEach((item) => {
      if (item.type === 'textfield') {
        if (item.name === 'age' || item.name === 'phoneNumber')
          cy.get(`#${item.name}`).type('1299', typingConfig);
        else if (item.name === 'dpid') {
          cy.get(`#${item.name}`).type(new Date().toISOString(), typingConfig);
        } else cy.get(`#${item.name}`).type('test text', typingConfig);
      } else if (item.type === 'radio') {
        cy.get(`#${item.name}-yes`).click();
      } else if (item.type === 'dropdown') {
        cy.get(`#${item.name}`)
          .click({ force: true })
          .get(`#${item.name}-${item.props[0]}`)
          .click();
      } else if (item.type === 'checkbox') {
        cy.get(`#${item.name}-0`).click();
      }
    });

    cy.contains('Submit').click();
   
    cy.get('#alert-dialog-title', {
      timeout: 3000,
    });
  });
});
