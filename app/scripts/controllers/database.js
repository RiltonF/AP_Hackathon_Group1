'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:DatabaseCtrl
 * @description
 * # DatabaseCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('DatabaseCtrl', function ($scope, Tests) {
    $scope.tests = Tests;
      Tests.success(function(data){
        $scope.tests = data;
      }).error(function(data, status){
        console.log(data, status);
        $scope.tests = [];
      });
  });
