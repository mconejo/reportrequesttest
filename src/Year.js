'use strict';

var Year = function() {
    this.getCurrentYear = function () {
        return new Date().getFullYear();
    }

    this.getDropdownElements = function () {
        return this.range(2000, this.getCurrentYear());
    }

    this.range = function (start, end) {
        var arr = [];
        while(start <= end){
            arr.push(start++);
        }
        return arr;
    }
};
