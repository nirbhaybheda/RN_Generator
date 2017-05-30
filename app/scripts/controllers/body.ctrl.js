'use strict';


angular.module('rnGeneratorApp')
    .controller('BodyCtrl', ['$scope', function ($scope) {

        $scope.highlighter = 'Home';
        $scope.highlight = function (highlighter) {
            $scope.highlighter = highlighter;
            console.log($scope.highlighter);
        }
        // alert('Nirbhay');

    }]);