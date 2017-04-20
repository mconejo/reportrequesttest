'use strict';

/**
* All tests passed on 4/19/2017
*/

describe("Quarter", function () {
    var quarter;

    beforeEach(function () {
        quarter = new Quarter();
    });

    it("Should return the current quarter", function () {
        expect(quarter.getCurrentQuarter()).toEqual(2);
    });

    it("Should return the most recently completed quarter", function () {
        expect(quarter.getLastFinishedQuarter()).toEqual(1);
    });

    it("Should return an array for the completed quarters for the year 2016", function () {
        expect(quarter.getDropdownElements(2016)).toEqual([Object({ name: 'Q1', value: 1 }), Object({ name: 'Q2', value: 2 }), Object({ name: 'Q3', value: 3 }), Object({ name: 'Q4', value: 4 })]);
    });

    it("Should return an array for the completed quarters for the year 2017", function () {
        expect(quarter.getDropdownElements(2017)).toEqual([Object({ name: 'Q1', value: 1 })]);
    });

    it("Should return an array with the complete list of quarters in case the year control is absent", function () {
        expect(quarter.getDropdownElements()).toEqual([Object({ name: 'Q1', value: 1 }), Object({ name: 'Q2', value: 2 }), Object({ name: 'Q3', value: 3 }), Object({ name: 'Q4', value: 4 })]);
    });
});
