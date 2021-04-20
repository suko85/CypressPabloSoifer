describe('Cuentas', function(){
    var a = 1;
    it('Igualdad', function(){
        //expect(1==2, "Both terms should be equals but not were.").to.equal(true);
    })
    it('Que no sea una igualdad', function(){        
        expect(1==2).to.equal(false);
    })
    it('Una resta esté bien', function(){        
        expect(1-5, "Expected return 0, but was different.").to.equal(0);
    })
    it('Una resta que no esté bien', function(){
        expect(1-1).to.not.equal(2);
    })
    it('Tiene que ser verdadero', function(){
        expect(2==2).to.be.true;
    })
    it('Tiene que ser falso', function(){
        expect(2==1).to.be.false;
    })
    it('la variable existe', function(){
        expect(a).to.exist;
    })
    it('Es menos que 10', function(){
        expect(a).to.be.lessThan(10);
    })
    it('Es mayor a 10', function(){
        expect(25).to.be.greaterThan(10);
    })
})