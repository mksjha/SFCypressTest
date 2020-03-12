describe('Login Page', function() {
  it('Visit the salesforce', function() {

    cy.request('https://mksjha-dev-ed.my.salesforce.com/?un=&pw=')
     cy.visit('https://mksjha-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=00B2w000006DY7nEAG')
     cy.wait(10000)
     .get('.forceOutputLookup').contains('Burlington Textiles Corp of America').click()
     cy.wait(10000)
     //unable to fins shadow dom element through cypress
     //.get('input[name="Name"]').type('12345')
     
     //not sure why jquery not working. jquery is able to find element through console

    //  const $li = Cypress.$('input[name="Name"]')
    //  cy.wrap($li).type('1234')
    
    //with shadow dom plug in shadow type method is working but type is not working
    .shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-input-field')
    .shadowFind('lightning-input')
    .shadowFind('input[name="Name"]')
    .shadowType('mukesh')
    //.type('mukesh') //giving max call error
    
    //Getting complete this field error on clicking of submit even if text area field is populated
    
    .shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-input-field')
    .shadowFind('lightning-textarea')
    .shadowFind('textarea[name="Description"]')
    //.shadowType ("text area") //cannot use beacuse it is populating field but clicking on submit gives complete field error
    .type ("text area") //max call error
    
    .shadowGet('one-record-home-flexipage2')
    .shadowFind('forcegenerated-flexipage_account_record_page_account__view_js')
    .shadowFind('flexipage-record-page-decorator')
    .shadowFind('flexipage-record-home-three-col-template-desktop2')
    .shadowFind('flexipage-record-home-scrollable-column')
    .shadowFind('flexipage-component2')
    .shadowFind('c-first')
    .shadowFind('lightning-record-edit-form')
    .shadowFind('lightning-button')
    .shadowFind('button[type="submit"]')
    .shadowClick()

  })

})



