'use strict';

/**
 * @ngdoc function
 * @name rnGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rnGeneratorApp
 */


angular.module('rnGeneratorApp')
  .controller('MainCtrl', ['$scope', 'appServices', 'CONSTANTS', '$q', '$location', '$window', function ($scope, appServices, CONSTANTS, $q, $location, $window) {

    $scope.loadpage = function (loadpage) {
      $scope.devclick = loadpage;
      console.log($scope.devclick);
    }

    $scope.docOps = {
      res: {},
      replace_in: {},
      downloadDevDoc: function () {
        alasql('SELECT * FROM XLSX("documents/example.xlsx",{headers:true,sheetid:"Sheet1",range:"A1:D100"})',
          [], function (data) {
            data.map(function (item) {
              if (Object.keys(item).length > 0) {
                $scope.docOps.replace_in = item;
              }
            });

            var defer = $q.defer();
            var httpParams = angular.copy(CONSTANTS.API.MODIFY);
            httpParams.url = angular.copy(CONSTANTS.API.BASE_URL) + httpParams.url
            httpParams.data = { "replace": $scope.docOps.replace_in };

            appServices.doAPIRequest(httpParams)
              .then(function (response) {
                // defer.resolve(response);
                httpParams = angular.copy(CONSTANTS.API.GET_FILE);
                httpParams.url = angular.copy(CONSTANTS.API.BASE_URL) + httpParams.url

                appServices.doAPIRequest(httpParams)
                  .then(function (response) {
                    // $location.path('google.com');
                    $window.location.href = CONSTANTS.API.BASE_URL + '/api/modify';
                  })

              }, function (error) {
                alert('error');
              });

            // return defer.promise;
          });
      }
    }

  }]);





