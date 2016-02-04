angular.module('bleeveTest')
    .controller('mainCtrl', function ($scope, $http, eventsOne, eventsTwo, eventsThree) {

        // bind data from resolve to variables
        var eventsOne = eventsOne.data;
        var eventsTwo = eventsTwo.data;
        var eventsThree = eventsThree.data;
        $scope.check = false;
        $scope.events = eventsOne.items;
        $scope.calendar = eventsOne;
        $scope.room = 1;


        // change table that shows events to different room
        $scope.changeRoom = function(room) {
            $scope.room = room;

            if (room === 1) {
                $scope.events = eventsOne.items;
                $scope.calendar = eventsOne;
            }
            else if (room === 2) {

                $scope.events = eventsTwo.items;
                $scope.calendar = eventsTwo;
            }
            else {
                $scope.events = eventsThree.items;
                $scope.calendar = eventsThree;
            }
        };

        // check current availability of meetingrooms
        $scope.checkAvailability = function() {
            var now = moment();
            var then = moment().add(1, 'hour');
            console.log(now);
            console.log(then);
            var nowApi = moment(now).format("YYYY-MM-DDTHH:mm:ssZ");
            var thenApi = moment(then).format("YYYY-MM-DDTHH:mm:ssZ");

            var idOne = 'santibleevetest@gmail.com';
            var idTwo = 'l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com';
            var idThree = 'i2iv95bgjtcr72cqossikavpts@group.calendar.google.com';

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
                            $scope.availableOne = ' available';
                            $scope.check=true;
                        }
                        else {
                            $scope.availableOne = ' taken';
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
                            $scope.availableTwo = ' available';
                            $scope.check=true;
                        }
                        else {
                            $scope.availableTwo = ' taken';
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
                            $scope.availableThree = ' available';
                            $scope.check=true;
                        }
                        else {
                            $scope.availableThree = ' taken';
                            $scope.check=true;
                        }
                    },
                    function(response) { // optional
                        // failed
                    }
                );
        };
});