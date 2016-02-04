'use strict';

angular.module('bleeveTest')
    .directive('tableEvents', function () {
        return {
            templateUrl: '/partials/table/tableEvents.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });