describe('Login Page', function() {
  it('Visit the salesforce', function() {

    cy.request('https://mksjha-dev-ed.my.salesforce.com/?un=&pw=')
     cy.visit('https://mksjha-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=Recent')
     cy.wait(10000)
     .get('.forceOutputLookup').contains('Burlington Textiles Corp of America').click()
     cy.wait(3000)
     //unable to fins shadow dom element through cypress
     //.get('input[name="Name"]').type('12345')
     
     //not sure why jquery not working. jquery is able to find element through console

    //  const $li = Cypress.$('input[name="Name"]')
    //  cy.wrap($li).type('1234')
    
    //with shadow dom plug in shadow type method is working but type is not working
    //.shadowGet('c-first').shadowFind('lightning-record-edit-form').shadowFind('lightning-input-field').shadowFind('lightning-input').shadowFind('input[name="Name"]').shadowType('mukesh')
   .shadowGet('c-first').shadowFind('lightning-record-edit-form').shadowFind('lightning-input-field').shadowFind('lightning-input').shadowFind('input[name="Name"]').type('mukesh')
    
    //Getting complete this field error on clicking of submit even if text area field is populated
    cy.shadowGet('c-first')
   
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-input-field')
    .shadowFind('lightning-textarea')
    .shadowFind('textarea[name="Description"]')
    .shadowType("Description")

    cy.shadowGet('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-button')
    .shadowFind('button[type="submit"]')
    .shadowClick()

  })

})



