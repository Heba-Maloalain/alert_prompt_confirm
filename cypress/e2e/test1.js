Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  /// <reference types="Cypress" />
  describe('this is test for Msg box', () => {
      it.skip('this is test for alert ', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('#OKTab > .btn').click()
        cy.on('window:alert',(ele)=>{
  
  expect(ele).to.eql("I am an alert box!")
  
  
        })
  
      
      
  });
  it.skip('this is test for prompt', () => {
    cy.visit("https://demo.automationtesting.in/Alerts.html")
  cy.window().then((win)=>{
  cy.stub(win,'prompt').returns("laila")})
  cy.get('#Textbox > .btn').click()
  
  })
  
   it('this is test for confirm', () => {
    cy.visit("https://demo.automationtesting.in/Alerts.html")
  cy.on('window:confirm',(ele)=>{
  cy.log(ele)
  return false;
  
  })
  cy.get('#CancelTab > .btn').click()
  
   });
  
  
  
  
   });