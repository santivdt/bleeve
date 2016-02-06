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