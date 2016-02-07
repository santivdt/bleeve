'use strict';

angular.module('bleeveTest')
    .directive('bookForm', function () {
        return {
            templateUrl: '/partials/bookForm.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });