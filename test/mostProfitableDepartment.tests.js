describe('the mostProfitableDepartment function ' , function(){
    it('the functiion should identify the departments that are the most profitabl for both datasets 1 and 2' , function(){
        assert.equal('', mostProfitableDepartment('salesData1'));
        assert.equal('', mostProfitableDepartment('salesData2'))
        
    });
    it('it should also identify the most profitable day of the week for both datasets 1 and 2' , function(){
        assert.equal('', mostProfitableDay('salesData1'));
        assert.equal('', mostProfitableDay('salesData'))
        
    }); 
  

});