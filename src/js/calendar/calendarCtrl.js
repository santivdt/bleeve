angular.module('bleeveTest')
    .controller('calendarCtrl', function ($scope, $http,  Calendar) {
        //data to speed up testing
        $scope.description = 'Een evenement';
        $scope.summary = 'Vergadering';
        $scope.email = 'santi@oneplanetcrowd.nl';
        $scope.name = 'Santi';

        //TODO insert logic for when different endday


        var resource = {
            "summary": "Appointment",
            "location": "Somewhere",
            "start": {
                "dateTime": "2016-02-06T10:00:00.000+01:00"
            },
            "end": {
                "dateTime": "2016-02-06T10:25:00.000+01:00"
            }
        };

        // function load the calendar api and make the api call
        $scope.makeApiCall = function() {
            console.log('call Apicall');


            // google api console clientID and apiKey (https://code.google.com/apis/console/#project:568391772772)
            var clientId = '975158700685-vpvpok98ivogaadnm5ke1sq9ksqs22r2.apps.googleusercontent.com';
            var apiKey = 'AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g';

            // enter the scope of current project (this API must be turned on in the google console)
            var scopes = 'https://www.googleapis.com/auth/calendar';


            // Oauth2 functions
            function handleClientLoad() {
                gapi.client.setApiKey(apiKey);
                window.setTimeout(checkAuth,1);
            }

            function checkAuth() {
                gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
            }

            // show/hide the 'authorize' button, depending on application state
            function handleAuthResult(authResult) {
                var authorizeButton = document.getElementById('authorize-button');
                var resultPanel		= document.getElementById('result-panel');
                var resultTitle		= document.getElementById('result-title');

                if (authResult && !authResult.error) {
                    authorizeButton.style.visibility = 'hidden';			// if authorized, hide button
                    resultPanel.className = resultPanel.className.replace( /(?:^|\s)panel-danger(?!\S)/g , '' )	// remove red class
                    resultPanel.className += ' panel-success';				// add green class
                    resultTitle.innerHTML = 'Application Authorized'		// display 'authorized' text
                    makeApiCall();											// call the api if authorization passed
                } else {													// otherwise, show button
                    authorizeButton.style.visibility = 'visible';
                    resultPanel.className += ' panel-danger';				// make panel red
                    authorizeButton.onclick = handleAuthClick;				// setup function to handle button click
                }
            }

            // function triggered when user authorizes app
            function handleAuthClick(event) {
                gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
                return false;
            }

            gapi.client.load('calendar', 'v3', function() {					// load the calendar api (version 3)
                var request = gapi.client.calendar.events.insert({
                    'calendarId':		'primary',	// calendar ID
                    "resource":			resource							// pass event details with api call
                });

                // handle the response from our api call
                request.execute(function(resp) {
                    if(resp.status=='confirmed') {
                        document.getElementById('event-response').innerHTML = "Event created successfully. View it <a href='" + resp.htmlLink + "'>online here</a>.";
                    } else {
                        document.getElementById('event-response').innerHTML = "There was a problem. Reload page and try again.";
                    }
                    /* for (var i = 0; i < resp.items.length; i++) {		// loop through events and write them out to a list
                     var li = document.createElement('li');
                     var eventInfo = resp.items[i].summary + ' ' +resp.items[i].start.dateTime;
                     li.appendChild(document.createTextNode(eventInfo));
                     document.getElementById('events').appendChild(li);
                     } */
                    console.log(resp);
                });
            });
        };



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


