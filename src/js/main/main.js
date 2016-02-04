'use strict';

angular.module('bleeveTest')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                resolve: {
                    eventsOne: function ($http) {
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/santibleevetest@gmail.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g');
                        //TODO error handling
                    },
                    eventsTwo: function ($http) {
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g');
                    },
                    eventsThree: function ($http) {
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/i2iv95bgjtcr72cqossikavpts@group.calendar.google.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g');
                    }
                },
                templateUrl: '../../partials/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            });
    });