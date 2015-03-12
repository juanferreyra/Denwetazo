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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/prueba', {
        templateUrl: 'views/prueba.html',
        controller: 'PruebaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });