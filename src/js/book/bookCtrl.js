angular.module('bleeveTest')
    .controller('bookCtrl', function ($scope, $http, $filter, $window, googleService, $mdDialog) {
        //data to speed up testing
        //$scope.description = 'Een evenement';
        //$scope.summary = 'Vergadering';
        //$scope.email = 'santi@oneplanetcrowd.nl';
        //$scope.name = 'Santi';
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

            if (meetingroom === 'Meetingroom 1') {
                var calendarId = 'santibleevetest@gmail.com';
            }

            else if (meetingroom === 'Meetingroom 2') {
                var calendarId = 'l7qoh0gl56n1lrok0r5t23dc80@group.calendar.google.com';
            }

            else if (meetingroom === 'Meetingroom 3') {
                var calendarId = 'i2iv95bgjtcr72cqossikavpts@group.calendar.google.com';
            }

            var request = gapi.client.calendar.events.insert({
                'calendarId': calendarId,
                'resource': data
            });
            request.execute(function(data) {
                console.log('Event created: ',data);
            });
        };

        $scope.changeShowAdd = function () {
            $scope.showAdd = !$scope.showAdd;
        };

        $window.ready= function() {
            console.log('GOOGLEREADY');
        };

        $scope.closeModal = function() {
            console.log('close');
            $mdDialog.hide();
        };
    });


