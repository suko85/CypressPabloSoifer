describe('Escribir en búsqueda varios strings', function(){
    it('Vamos a escribir y limpiar', function(){
        cy.visit('http://automationpractice.com/index.php');        
        /*cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Hola');
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('que tal');*/
        cy.get('#search_query_top').clear().type('Hola').clear().type('que tal');
    })
})