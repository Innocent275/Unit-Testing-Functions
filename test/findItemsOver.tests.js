describe('The findItemsOver function...', function () {
    it('The function should return products that have quantity higher than the threshold.', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));
    
    });
    
});