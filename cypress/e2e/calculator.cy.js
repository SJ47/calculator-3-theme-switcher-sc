/// <reference types="Cypress" />

describe("calculator", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should display the calculator", () => {
    cy.percySnapshot("Homepage loaded")  // Percy snapshot
    cy.contains("calc")  // Check it has logo calc
  })

  // should start with result 0
  it("should start with result 0", () => {
    cy.get('[data-cy="result"]').should('have.value', "")
  })

  // should have 18 buttons
  it("should have 18 buttons", () => {
    cy.get('[data-cy^="key"]').should("have.length", 18)  // ^ means starts with key
  })
})