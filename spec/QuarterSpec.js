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
        expect(quarter.getDropdownElements(2016)).toEqual(["Q1", "Q2", "Q3", "Q4"]);
    });

    it("Should return an array for the completed quarters for the year 2017", function () {
        expect(quarter.getDropdownElements(2017)).toEqual(["Q1"]);
    });

    it("Should return an array with the complete list of quarters in case the year control is absent", function () {
        expect(quarter.getDropdownElements()).toEqual(["Q1", "Q2", "Q3", "Q4"]);
    });
});
