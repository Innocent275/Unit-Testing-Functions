describe('the transportFee function' , function(){
    it('Should return the right price based on the shift a person is working on are working..' , function(){
        assert.equal('R20', transportFee('morning')); 
        assert.equal('R10', transportFee('afternoon'));
        assert.equal('free', transportFee('nightshift')); 
        
    });

});