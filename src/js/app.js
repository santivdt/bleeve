angular.module('bleeveTest', [
    'ui.router'
]).config(function($urlRouterProvider, $locationProvider) {
    'use strict';
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});






