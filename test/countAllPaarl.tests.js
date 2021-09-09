describe('the countAllPaarl function' , function(){
    it('Should return a number of registration numbers in the string for Paarl.' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123')); 
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123')); 
        assert.equal(4, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123,CJ 345 999'));

    });

});