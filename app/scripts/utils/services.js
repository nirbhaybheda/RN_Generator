/** Copyright (c) 2016-17 MapleLabs Inc **/
'use strict';

angular.module("rnGeneratorApp")
    .service('appServices', function ($http, $q, $timeout) {
        var appServices = this;

        appServices.doAPIRequest = function (httpParams) {
            var defer = $q.defer();
            $timeout(function () {
                $http(httpParams)
                    .then(function onSuccess(response) {
                        defer.resolve(response.data);
                    }, function onError(response) {
                        defer.reject(response);
                    });
            }, 0);
            return defer.promise;
        }
    });
