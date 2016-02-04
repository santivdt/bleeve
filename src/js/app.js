angular.module('bleeveTest', [
    'ui.router',
    'gapi'
]).config(function($urlRouterProvider, $locationProvider) {
    'use strict';
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


angular.module('bleeveTest')
    .value('GoogleApp', {
        apiKey: 'AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g',
        clientId: '975158700685-vpvpok98ivogaadnm5ke1sq9ksqs22r2.apps.googleusercontent.com',
        scopes: [
            // whatever scopes you need for your app, for example:
            //'https://www.googleapis.com/auth/drive',
            //'https://www.googleapis.com/auth/youtube',
            //'https://www.googleapis.com/auth/userinfo.profile'
            'https://www.googleapis.com/auth/calendar'
            // ...
        ]
    });

var apiKey = 'AIzaSyB2di7px-QpK7MXbqx6k3JsgjQc2YFos6g';
var clientId = '975158700685-vpvpok98ivogaadnm5ke1sq9ksqs22r2.apps.googleusercontent.com';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
}

function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}





