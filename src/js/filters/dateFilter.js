'use strict';

angular.module('bleeveTest')
    .filter('dateFilter', function () {
        return function (startDate, startTime, endDate, endTime) {
            if (typeof(startDate) === 'undefined' || typeof(startTime) === 'undefined') {
                return input;
            }

            else if (typeof(endDate) === 'undefined' && typeof(endTime) === 'undefined') {
                var endDate = startDate;
                var endTime = moment(startTime).add(1, 'hour');
                var startDateG = moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ").slice(0, 11);
                var startTimeG = moment(startTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
                var endTimeG = moment(endTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
                var startDateFinal = (startDateG + startTimeG);
                var endDateFinal = (startDateG + endTimeG);
                var dates = [startDateFinal, endDateFinal];
                return dates;
            }

            else if (typeof(endDate) === 'undefined') {
                var startDateG = moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ").slice(0, 11);
                var startTimeG = moment(startTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
                var endTimeG = moment(endTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
                var startDateFinal = (startDateG + startTimeG);
                var endDateFinal = (startDateG + endTimeG);
                var dates = [startDateFinal, endDateFinal];
                return dates;
            }
        }
    });