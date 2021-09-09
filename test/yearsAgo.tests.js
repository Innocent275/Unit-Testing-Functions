escribe('the yearsAgo function' , function(){
    it('takes a year and returns the number of years that year is older than the current year.' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
        assert.equal((new Date().getFullYear() - 2019), yearsAgo(2019));
        assert.equal((new Date().getFullYear() - 1992), yearsAgo(1992));

        

    });

});