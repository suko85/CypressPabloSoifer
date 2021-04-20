describe("Pruebas en el sitio, seccion Women", function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    })
    it("Large Tops search",  function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        /* chequeando cosas 1
           chequeando cosas 2
           chequeando cosas 3
         */
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();
    })
    it ('Order by highest price', function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    })
    it ('Order by In stock', function(){
        cy.get('#selectProductSort').select('In stock');
    })
})