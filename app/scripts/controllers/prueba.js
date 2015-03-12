'use strict';

/**
 * @ngdoc function
 * @name denwetazoApp.controller:PruebaCtrl
 * @description
 * # PruebaCtrl
 * Controller of the denwetazoApp
 */
 /*
var listaInternos;
var url= 'http://192.168.10.156:8080/Denwa/jsonInternos.php';
$.ajax({
    url: url,
    dataType: 'json',
    success:  function (response) {
        listaInternos = response;
    }
});*/

angular.module('denwetazoApp')
  .controller('PruebaCtrl', function ($scope, pruebaS) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.internos = pruebaS.query();

  });