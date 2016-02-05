angular.module('bleeveTest')
    .controller('bookCtrl', function ($scope, $http, $filter) {
        //data to speed up testing
        $scope.description = 'Een evenement';
        $scope.summary = 'Vergadering';
        $scope.email = 'santi@oneplanetcrowd.nl';
        $scope.name = 'Santi';
        $scope.showAdd = false;

        //TODO insert logic for when different endday

        $scope.submit = function(email,
                                 name,
                                 summary,
                                 description,
                                 meetingroom,
                                 startDate,
                                 endDate,
                                 startTime,
                                 endTime)
        {
            //var location = meetingroom;

            var dates =  $filter('dateFilter')(startDate, startTime, endDate, endTime);
            console.log(dates, 'dates from controller after filter');
            
            //create Json to send to api
            var data = {
                "summary": summary,
                "location": location,
                "start": {
                    "dateTime": dates[0]
                },
                "end": {
                    "dateTime": dates[1]
                }
            };
            console.log(data);
            $http.post('https://www.googleapis.com/calendar/v3/calendars/santibleevetest@gmail.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', data);
            console.log('na post');
        };

        $scope.changeShowAdd = function () {
            $scope.showAdd = !$scope.showAdd;
        }
    });


