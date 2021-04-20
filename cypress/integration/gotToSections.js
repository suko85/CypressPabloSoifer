describe('Go to different sections', function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php");
    })
    it('Go to Women section', function(){
        cy.get('[class="sf-with-ul"]').first().click(); //select first element of the list of element with same class.
    })
    it('Go to dresses section', function(){
        cy.get('[class="sf-with-ul"]').eq(3).click(); // select item by position.
    })
})