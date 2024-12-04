describe('Admin Section', () => {
  it('Add User', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name=username').type('Admin')
    cy.get('[name=password').type('admin123')
    cy.get('.oxd-button').click()
    //Interact with side menu to click in Admin
    cy.get('.oxd-main-menu').contains('Admin').click()
    // Interact with Add button
    cy.get('.orangehrm-header-container > .oxd-button').click()
    

    //Allow interact with first element displayed when have more than 1 
    //When use .first() you select the 1st element displayed
    cy.get('div.oxd-select-wrapper').first().click()
    //Select 1st item in the User Role dropdown menu User Role - Admin
    cy.get("div[role='listbox'] div").eq(1).click();

    //Select 1st item in the Status dropdown menu - Enable
    cy.get('div.oxd-select-wrapper').eq(1).click()
    cy.get("div[role='listbox'] div").eq(1).click();

  
  })
})