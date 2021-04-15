/* To get really good tooling and autocomplete */
/// <reference types="Cypress" />

beforeEach(() => {
  // Use fixtire to load fake todos response from `cypress/fixtures`
  cy.fixture("todos").then((todos) => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      todos?.data || []
    ).as("getTodos");
  });
  cy.visit("http://localhost:3000/todos");
  cy.loader().should("exist");
});

afterEach(() => {
  // Loading Spinner should not exist
  cy.loader().should("not.exist");
});

describe("Todo List", () => {
  it("should fetch two Todos", () => {
    cy.wait("@getTodos"); // <--- wait explicitly for this route to finish
    cy.getByTestId("todo-list").children().should("have.length", 2);
    cy.getByTestId("todo-item").should("have.length", 2);
  });
});
