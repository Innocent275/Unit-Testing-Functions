describe('the regCheck function ' , function(){
    it('Should check if indeed a registration number is for a particular province and return true otherwise it should return fslse' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
        assert.equal(false, regCheck('DC 55 YU GP','EC'));
        assert.equal(true, regCheck('5566 L', 'L'));
        assert.equal(false, regCheck('5566 L', 'M'));

    });
  

});