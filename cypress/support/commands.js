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
  //cy.contains("This is a Todo List");
});

// Custom command to click Links
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});
