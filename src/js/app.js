angular.module('bleeveTest', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngMaterialDatePicker'
]).config(function($urlRouterProvider, $locationProvider) {
    'use strict';
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});






