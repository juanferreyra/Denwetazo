'use strict';

/**
 * @ngdoc service
 * @name denwetazoApp.prueba
 * @description
 * # prueba
 * Service in the denwetazoApp.
 */
angular.module('denwetazoApp')
  .service('pruebaS', function ($resource) {
    return $resource('/Denwa/jsonInternos.php',{
        'query':{method:'GET'}
    });
  });
