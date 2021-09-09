describe('the greet function ' , function(){
    it('should return "Hello Athenkosi" when I greet Athenkosi' , function(){
        assert.equal('Hello, Athenkosi', greet('Athenkosi'));

        
    });
    it('should return "Hello Bernett" when I greet Bernett' , function(){
            assert.equal('Hello, Bernett', greet('Bernett'));
    
            
    });
    

});