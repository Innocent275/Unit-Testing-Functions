describe('the countRegNumber function ' , function(){
    it('should take a string and return the total of registration numbers that are there ' , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
        assert.equal(1, countRegNumber('CJ 812328'));
        assert.equal(2, countRegNumber('CY 523519,CJ 812328'));

        
    });
    

});