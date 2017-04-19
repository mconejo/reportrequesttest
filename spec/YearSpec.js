'use strict';

describe("Year", function () {
    var year;

    beforeEach(function () {
        year = new Year();
    });

    it("Should return the current year", function () {
        expect(year.getCurrentYear()).toEqual(2017);
    });

    it("Should return an array with 18 elements to populate the year dropdown", function () {
        expect(year.getDropdownElements().length).toEqual(18);
    });
});
