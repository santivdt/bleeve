angular.module('bleeveTest')
    .controller('bookCtrl', function ($scope, $http) {
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

            //TODO make filter to change the date to right format
            var startDateG = moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ").slice(0, 11);
            var startTimeG = moment(startTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
            var endTimeG = moment(endTime).format("YYYY-MM-DDTHH:mm:ssZ").slice(11, 25);
            var startDateFinal = (startDateG + startTimeG);
            var endDateFinal = (startDateG + endTimeG);
            var location = meetingroom;

            //create Json to send to api
            var data = {
                "summary": summary,
                "location": location,
                "start": {
                    "dateTime": startDateFinal
                },
                "end": {
                    "dateTime": endDateFinal
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


