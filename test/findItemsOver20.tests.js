describe('The findItemsOver20 function...', function () {
    it('should return all the products that have a quantity over 20 in the itemList', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});