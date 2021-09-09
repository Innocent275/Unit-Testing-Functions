describe('the isWeekday function' , function(){
    it('should take a string parameter and find out if the parameter passed in is a day of the week or not' , function(){
        assert.equal(false, isWeekday('Saturday'));
        assert.equal(true, isWeekday('Monday'));

    });

});
