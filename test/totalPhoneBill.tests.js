  
describe('the totalPhoneBill function' , function(){
    it('Should Calculate the total telephone bill for the data provided' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms')); 
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
       
    });

});