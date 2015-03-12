'use strict';

/**
 * @ngdoc overview
 * @name denwetazoApp
 * @description
 * # denwetazoApp
 *
 * Main module of the application.
 */
angular
  .module('denwetazoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tel-fax', {
        templateUrl: 'views/prueba.html',
        controller: 'PruebaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });