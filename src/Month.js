'use strict';

var Month = function() {
    var date = new Date(),
        yearObj = new Year(),
        monthNames = [{'name': 'Jan', 'value': 0},
                      {'name': 'Feb', 'value': 1},
                      {'name': 'Mar', 'value': 2},
                      {'name': 'Apr', 'value': 3},
                      {'name': 'May', 'value': 4},
                      {'name': 'Jun', 'value': 5},
                      {'name': 'Jul', 'value': 6},
                      {'name': 'Aug', 'value': 7},
                      {'name': 'Sep', 'value': 8},
                      {'name': 'Oct', 'value': 9},
                      {'name': 'Nov', 'value': 10},
                      {'name': 'Dec', 'value': 11}];

    this.getCurrentMonth = function (completed) {
        var month = completed ? date.getMonth() - 1 : date.getMonth();
        return monthNames[month];
    }

    this.getMonthArray = function (limit) {
        var result = [];

        for (var i = 0; i <= limit; i++) {
            result.push(monthNames[i]);
        }

        return result;
    }

    this.getDropdownElements = function (year) {
        if(year > yearObj.getCurrentYear()){
            throw 'Year is not valid';
        } else {
            var limit = year < yearObj.getCurrentYear() || !year || isNaN(year) ? 11 : this.getCurrentMonth(true).value;

            return this.getMonthArray(limit);
        }
    }
};
