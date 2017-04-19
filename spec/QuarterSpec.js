'use strict';

describe("Quarter", function () {
    var quarter;

    beforeEach(function () {
        quarter = new Quarter();
    });

    it("Should return the current quarter", function () {
        expect(quarter.getCurrentQuarter()).toEqual(2);
    });
});
