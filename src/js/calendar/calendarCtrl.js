angular.module('bleeveTest')
    .controller('calendarCtrl', function ($scope, $http) {
        //data to speed up testing
        $scope.description = 'Een evenement';
        $scope.summary = 'Vergadering';
        $scope.email = 'santi@oneplanetcrowd.nl';
        $scope.name = 'Santi';

        //TODO insert logic for when different endday

        $scope.submit = function(email,
                                  name,
                                  summary,
                                  description,
                                  meetingroom,
                                  startDate,
                                  startTime,
                                  endTime)
        {

            var now = moment().format("YYYY-MM-DDTHH:mm:ssZ");
            var startDate = moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ");

            //create Json to send to api
            var data = {
                "kind": "calendar#event",
                //"etag": etag,
                "id": 'santibleevetest@gmail.com',
                //"status": string,
                //"htmlLink": string,
                "created": now,
                "updated": now,
                "summary": summary,
                "description": description,
                "location": meetingroom,
                //"colorId": string,
                "creator": {
                    "id": name,
                    "email": email,
                    "displayName": name
                    //"self": boolean
                },
                "organizer": {
                    //"id": string,
                    "email": email,
                    "displayName": name
                    //"self": boolean
                },
                "start": {
                    "date": startDate,
                    "dateTime": dateTimeStart
                    //"timeZone": string
                },
                "end": {
                    "date": startDate,
                    "dateTime": dateTimeEnd
                    //"timeZone": string
                }
                //"endTimeUnspecified": boolean,
                //"recurrence": [
                //    string
                //],
                //"recurringEventId": string,
                //"originalStartTime": {
                //    "date": date,
                //    "dateTime": datetime,
                //    "timeZone": string
                //},
                //"transparency": string,
                //"visibility": string,
                //"iCalUID": string,
                //"sequence": integer,
                //"attendees": [
                //    {
                //        "id": string,
                //        "email": string,
                //        "displayName": string,
                //        "organizer": boolean,
                //        "self": boolean,
                //        "resource": boolean,
                //        "optional": boolean,
                //        "responseStatus": string,
                //        "comment": string,
                //        "additionalGuests": integer
                //    }
                //],
                //"attendeesOmitted": boolean,
                //        "extendedProperties": {
                //            "private": {
                //            (key): string
                //},
                //    "shared": {
                //        (key): string
                //    }
                //},
                //    "hangoutLink": string,
                //        "gadget": {
                //        "type": string,
                //            "title": string,
                //            "link": string,
                //            "iconLink": string,
                //            "width": integer,
                //            "height": integer,
                //            "display": string,
                //            "preferences": {
                //            (key): string
                //        }
                //    },
                //    "anyoneCanAddSelf": boolean,
                //        "guestsCanInviteOthers": boolean,
                //        "guestsCanModify": boolean,
                //        "guestsCanSeeOtherGuests": boolean,
                //        "privateCopy": boolean,
                //        "locked": boolean,
                //        "reminders": {
                //        "useDefault": boolean,
                //            "overrides": [
                //            {
                //                "method": string,
                //                "minutes": integer
                //            }
                //        ]
                //    },
                //    "source": {
                //        "url": string,
                //            "title": string
                //    },
                //    "attachments": [
                //        {
                //            "fileUrl": string,
                //            "title": string,
                //            "mimeType": string,
                //            "iconLink": string,
                //            "fileId": string
                //        }
                //    ]
            }
            console.log(data);
            $http.post('https://www.googleapis.com/calendar/v3/calendars/santibleevetest@gmail.com/events?key=AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g', data);
            console.log('na post');
        };
    });


