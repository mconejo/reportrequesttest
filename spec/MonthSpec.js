'use strict';

/**
* All tests passed on 4/19/2017
*/

describe("Month", function () {
    var month;

    beforeEach(function () {
        month = new Month();
    });

    it('Should return an object for the current month', function () {
        expect(month.getCurrentMonth()).toEqual({'name': 'Apr', 'value': 3});
    });

    it('Should return an object for the most recently completed month', function () {
        expect(month.getCurrentMonth(true)).toEqual({'name': 'Mar', 'value': 2});
    });

    it('Should return an array with 3 elements which represents the completed months of 2017 so far', function () {
        expect(month.getDropdownElements(2017).length).toEqual(3);
    });

    it('Should return an array with 12 elements which represents the months of 2016', function () {
        expect(month.getDropdownElements(2016).length).toEqual(12);
    });

    it('Should throw an exception for an invalid year (2018)', function () {
        expect(function () {
            month.getDropdownElements(2018);
        }).toThrow('Year is not valid');
    });
});
