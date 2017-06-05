'use strict';

/**
 * @ngdoc function
 * @name rnGeneratorApp.controller:docOpsCtrl
 * @description
 * # docOpsCtrl
 * Controller of the rnGeneratorApp
 */


angular.module('rnGeneratorApp')
    .controller('docOpsCtrl', ['$scope', function ($scope) {

        $scope.docOps = {
            res: {},
            loadInit: function () {
                debugger;
                alasql('SELECT * FROM XLSX("example.xlsx",{headers:true,sheetid:"Sheet1",range:"A1:D100"})',
                    [], function (data) {
                        debugger;
                        console.log(data);
                        $scope.docOps.res = data;
                    });
            }
        }

        $scope.docOps.loadInit();

    }]);





