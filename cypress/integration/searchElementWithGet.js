describe('Formas de encontrar un elemento', function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola'); //Buscamos por class.
        cy.get('#search_query_top').type(' Como te va '); //Buscando por id.
        cy.get('[name="search_query"]').type(' Me va muy bien '); //Buscamos por otra propiedad.
        cy.get('[placeholder="Search"]').clear(); //Clear borra el contenido del elemento. 
    })
})