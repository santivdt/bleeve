angular.module('bleeveTest')
    .controller('mainCtrl', function ($scope, $http, eventsOne, eventsTwo, eventsThree) {

        // bind data from resolve to variables
        var eventsOne = eventsOne.data;
        var eventsTwo = eventsTwo.data;
        var eventsThree = eventsThree.data;
        var idOne = 'santibleevetest@gmail.com';
        var idTwo = 'l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com';
        var idThree = 'i2iv95bgjtcr72cqossikavpts@group.calendar.google.com';
        $scope.check = false;
        $scope.events = eventsOne.items;
        $scope.room = 1;




        // change table that shows events to different room
        $scope.changeRoom = function(room) {
            $scope.room = room;

            if (room === 1) {
                $scope.events = eventsOne.items;
            }
            else if (room === 2) {
                $scope.events = eventsTwo.items;
            }
            else {
                $scope.events = eventsThree.items;
            }
        };

        //check availability of meetingrooms for entered date
        $scope.checkAvailability = function(startDate, startTime, endTime) {
            var startDateG = moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ").slice(0, 11);
            var startTimeG = moment(startTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
            var endTimeG = moment(endTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);

            var startDateFinal = (startDateG + startTimeG);
            var endDateFinal = (startDateG + endTimeG);

            var dataOne = {
                "timeMin":  startDateFinal,
                "timeMax":  endDateFinal,
                "items": [
                    {
                        "id": idOne
                    }
                ]
            };

            var dataTwo = {
                "timeMin":  startDateFinal,
                "timeMax":  endDateFinal,
                "items": [
                    {
                        "id": idTwo
                    }
                ]
            };

            var dataThree = {
                "timeMin":  startDateFinal,
                "timeMax":  endDateFinal,
                "items": [
                    {
                        "id": idThree
                    }
                ]
            };

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataOne)
                .then(function(response) {
                        var busy = response.data.calendars['santibleevetest@gmail.com'].busy;
                        if (busy.length === 0){
                            $scope.availableOne = true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableOne = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataTwo)
                .then(function(response) {
                        var busy = response.data.calendars['l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com'].busy;
                        if (busy.length === 0){
                            $scope.availableTwo =  true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableTwo = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataThree)
                .then(function(response) {
                        var busy = response.data.calendars['i2iv95bgjtcr72cqossikavpts@group.calendar.google.com'].busy;
                        if (busy.length === 0){
                            $scope.availableThree =  true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableThree = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );
        };

        // check current availability of meetingrooms
        $scope.checkAvailabilityNow = function() {
            var now = moment();
            var then = moment().add(1, 'hour');
            var nowApi = moment(now).format("YYYY-MM-DDTHH:mm:ssZ");
            var thenApi = moment(then).format("YYYY-MM-DDTHH:mm:ssZ");


            var dataOne = {
                    "timeMin":  nowApi,
                    "timeMax":  thenApi,
                    "items": [
                        {
                            "id": idOne
                        }
                    ]
                };

            var dataTwo = {
                "timeMin":  nowApi,
                "timeMax":  thenApi,
                "items": [
                    {
                        "id": idTwo
                    }
                ]
            };

            var dataThree = {
                "timeMin":  nowApi,
                "timeMax":  thenApi,
                "items": [
                    {
                        "id": idThree
                    }
                ]
            };

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataOne)
                .then(function(response) {
                        var busy = response.data.calendars['santibleevetest@gmail.com'].busy;
                        if (busy.length === 0){
                            $scope.availableOne = true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableOne = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataTwo)
                .then(function(response) {
                        var busy = response.data.calendars['l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com'].busy;
                        if (busy.length === 0){
                            $scope.availableTwo = true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableTwo = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );

            $http.post('https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', dataThree)
                .then(function(response) {
                        var busy = response.data.calendars['i2iv95bgjtcr72cqossikavpts@group.calendar.google.com'].busy;
                        if (busy.length === 0){
                            $scope.availableThree = true;
                            $scope.check=true;
                        }
                        else {
                            $scope.availableThree = false;
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );
        };
});