'use strict';

var Quarter = function() {
    var month = new Month(),
        yearObj = new Year();

    this.getCurrentQuarter = function () {
        return Math.floor((month.getCurrentMonth().value + 3) / 3);
    }

    this.quarters = [
        {'quarter': 1, 'lastMonth': 2}, //First quarter. Last month: March
        {'quarter': 2, 'lastMonth': 5}, //Second quarter. Last Month: June
        {'quarter': 3, 'lastMonth': 8}, //Third quarter. Last Month: September
        {'quarter': 4, 'lastMonth': 11} //Fourth quarter. Last Month: December
    ];

    this.getLastFinishedQuarter = function () {
        var result;

        this.quarters.forEach(function (quarter) {
            if(quarter.lastMonth < month.getCurrentMonth().value)
                result = quarter.quarter;
        });

        return result;
    }

    this.getDropdownElements = function (year) {
        var result = [],
            limit = year < yearObj.getCurrentYear() || !year || isNaN(year) ? 4 : this.getLastFinishedQuarter();
        for (var i = 1; i <= limit; i++) {
            result.push({'name' : 'Q' + i , 'value': i});
        }
        return result;
    }
};
