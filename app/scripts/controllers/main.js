'use strict';

/**
 * @ngdoc function
 * @name rnGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rnGeneratorApp
 */


angular.module('rnGeneratorApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

      $scope.loadpage = function (loadpage) {
        $scope.devclick = loadpage;
        console.log($scope.devclick);
      }
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
  }]);





