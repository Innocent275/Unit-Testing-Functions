describe('the fromWhere function' , function(){
    
    it('should take a car registration number as a parameter and return the town the car is from, it should return Bellville when the input is CY.' , function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('it should return Paarl when the input is CJ.' , function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it('it should return Cape Town when the input is CA.' , function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('it should return Cape Town when the input is CC if the registration is from other town.' , function(){
        assert.equal('Some other place!', fromWhere('CC'));
    });


});
