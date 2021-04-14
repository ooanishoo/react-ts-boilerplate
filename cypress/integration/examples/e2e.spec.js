/* To get really good tooling and autocomplete */
/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("http://localhost:3000");
});

it("has a title", () => {
  cy.contains("My Project");
});

it("navigates between pages", () => {
  //cy.pause();
  cy.clickLink("Todos");
  cy.url().should("include", "/todos");
  cy.clickLink("Home");
  cy.url().should("not.include", "/todos");
});

it("should render todos", () => {
  cy.goToTodos(); // call custom command
  //cy.get('[data-testid="todo-list"]').as("todos"); // using alias
  //cy.get("@todos")
  cy.get('[data-testid="todo-list"]')
    .children()
    .should("be.visible")
    .and("have.length.at.least", 1);
});
