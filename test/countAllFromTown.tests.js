describe('the countAllFromTown function' , function(){
    it('Should return number registration numbers in the string that is for that town.It should return 3 for Stellies.' , function(){

        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        

    });
    it('It should return 1 for Kuilsriver' , function(){

        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
        

    });

});
