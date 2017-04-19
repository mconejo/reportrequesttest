'use strict';

var Quarter = function() {
    var month = new Month(),
        year = new Year();

    this.getCurrentQuarter = function () {
        return Math.floor((month.getCurrentMonth() + 3) / 3);
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
            if(quarter.lastMonth < 9)
                result = quarter.quarter;
        });

        return result;
    }

    this.getDropdownElements = function (all) {
        var result = [],
            limit = all ? 4 : this.getCurrentQuarter();
        for (var i = 1; i <= limit; i++) {
            result.push('Q' + i);
        }
        return result;
    }
};
