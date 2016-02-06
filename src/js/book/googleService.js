angular.module('bleeveTest')
    .factory('googleService', function ($q) {


        return {
            init: function () {
                var ROOT = '//' + window.location.host;
                var hwdefer = $q.defer();
                var oauthloaddefer = $q.defer();
                var oauthdefer = $q.defer();

                gapi.client.load('calendar', 'v1', function () {
                    hwdefer.resolve(gapi);
                });
                gapi.client.load('oauth2', 'v2', function () {
                    oauthloaddefer.resolve(gapi);
                });
                var chain = $q.all([hwdefer.promise, oauthloaddefer.promise]);
                return chain;
            }


        }
    });


