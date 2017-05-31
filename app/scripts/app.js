'use strict';

/**
 * @ngdoc overview
 * @name rnGeneratorApp
 * @description
 * # rnGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('rnGeneratorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/docRender', {
        templateUrl: 'views/docOperations.html'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
