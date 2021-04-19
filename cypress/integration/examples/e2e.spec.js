/* To get really good tooling and autocomplete */
/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('has a title', () => {
  cy.contains('My Project')
})

it('navigates between pages', () => {
  //cy.pause();
  cy.log('Clicking on Todos link')
  cy.clickLink('Todos')
  cy.url().should('include', '/todos')
  cy.clickLink('Home')
  cy.url().should('not.include', '/todos')
})

it('should render todos', async () => {
  cy.goToTodos() // call custom command
  await cy
    .getByTestId('todo-list')
    .children()
    .should('be.visible')
    .and('have.length.at.least', 1)
})
