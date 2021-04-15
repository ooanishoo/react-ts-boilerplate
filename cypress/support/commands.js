// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import "@testing-library/cypress/add-commands";

// Custom command to go to todo
Cypress.Commands.add("goToTodos", () => {
  cy.visit("http://localhost:3000");
  cy.contains("Todos").click();
  cy.url().should("include", "/todos");
  cy.contains("Loading...").should("exist");
});

Cypress.Commands.add("loader", () => {
  cy.contains("Loading...");
});

// custom clickLink method
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

// custom getByTestId method
Cypress.Commands.add("getByTestId", (testId) =>
  cy.get(`[data-testid="${testId}"]`)
);
