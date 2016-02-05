'use strict';

angular.module('bleeveTest')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                resolve: {
                    eventsOne: function ($http) {
                        var now = moment().format("YYYY-MM-DDTHH:mm:ssZ").slice(0,19);
                        var now = (now + 'Z');
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/santibleevetest@gmail.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g&timeMin=' + now);
                        //TODO error handling
                        //TODO make sure DRY with the creation of var now
                    },
                    eventsTwo: function ($http) {
                        var now = moment().format("YYYY-MM-DDTHH:mm:ssZ").slice(0,19);
                        var now = (now + 'Z');
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g&timeMin=' + now);
                    },
                    eventsThree: function ($http) {
                        var now = moment().format("YYYY-MM-DDTHH:mm:ssZ").slice(0,19);
                        var now = (now + 'Z');
                        return $http.get('https://www.googleapis.com/calendar/v3/calendars/i2iv95bgjtcr72cqossikavpts@group.calendar.google.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g&timeMin=' + now);
                    }
                },
                templateUrl: '../../partials/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            });
    });