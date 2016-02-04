'use strict';

angular.module('bleeveTest')
    .config(function($stateProvider) {
        $stateProvider
            .state('calendar', {
                url: '/calendar',
                templateUrl: '../../partials/calendar.html',
                controller: 'calendarCtrl',
                controllerAs: 'calendar'
            });
    });
