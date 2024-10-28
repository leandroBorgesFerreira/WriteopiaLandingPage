describe('Home Page tests', () => {
  it('Displays the initial information', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Home')
    cy.contains('Product')
    cy.contains('What\'s coming')
    cy.contains('Free documentation. For the brave and true.')
    cy.contains('Write your ideas. Keep you docs safe and prive. Decide where you data goes.')
    cy.contains('Join Waitlist')
    cy.contains('Learn More')
    cy.contains('© 2024 Writeopia. All rights reserved.')    
    cy.contains('Terms of Service')
    cy.contains('Privacy')
  })

  it('It should be possible to navigate to products', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Product').click()

    cy.url().should('include', '/product')
    cy.contains('Todo - Product')
  })

  it('It should be possible to navigate to what\'s coming', () => {
    cy.visit('http://localhost:3000')

    cy.contains('What\'s coming').click()

    cy.url().should('include', '/coming')
    cy.contains('Todo - Coming')
  })
})