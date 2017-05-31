'use strict';


angular.module('rnGeneratorApp')
    .controller('BodyCtrl', ['$scope', function ($scope) {

        $scope.activeTab = 'Home';

        $scope.highlight = function (tab) {
            $scope.activeTab = tab;
            console.log($scope.activeTab);
        }
        // alert('Nirbhay');

    }]);