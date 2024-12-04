describe('Login', () => {
  it('Succesful Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name=username').type('Admin')
    cy.get('[name=password').type('admin123')
    cy.get('.oxd-button').click()
    // The part below is to validate the login process
    cy.contains('Dashboard').should('be.visible')

  
  })
  it('Invalid Login - Wrong user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name=username').type('Adminoy')
    cy.get('[name=password').type('admin123')
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials').should('be.visible')
  
  })

  it('Invalid Login - Wrong password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('[name=username').type('Admin')
      cy.get('[name=password').type('admin1235')
      cy.get('.oxd-button').click()
      cy.contains('Invalid credentials').should('be.visible')
    
    })

    it('Invalid Login - Empty user ', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('[name=password').type('admin123')
      cy.get('.oxd-button').click()
      cy.contains('Required').should('be.visible')
    
    })
})