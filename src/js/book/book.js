'use strict';

angular.module('bleeveTest')
    .config(function($stateProvider) {
        $stateProvider
            .state('book', {
                url: '/book',
                templateUrl: '../../partials/book.html',
                controller: 'bookCtrl',
                controllerAs: 'book'
            });
    });
