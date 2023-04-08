describe("various type of calculations", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should add numbers whole, decimal and negative numbers", () => {
    // 1 + 9 = 10
    cy.keyPress("1")
    cy.keyPress("+")
    cy.keyPress("9")
    cy.keyPress("=")
    cy.get('input[placeholder="10"]')

    // 5.56 + 9.8 = 15.36
    cy.keyPress("RESET").keyPress("5").keyPress(".").keyPress("5").keyPress("6")
    cy.keyPress("+")
    cy.keyPress("9").keyPress(".").keyPress("8")
    cy.keyPress("=")
    cy.get('input[placeholder="15.36"]')

    // -6 + -5 = -11
    cy.keyPress("RESET")
    cy.keyPress("-").keyPress("6").keyPress("-")
    cy.keyPress("+")
    cy.keyPress("-").keyPress("5").keyPress("-")
    cy.keyPress("=")
    cy.get('input[placeholder="-11"]')
  })
})