'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:DatabasedetailsCtrl
 * @description
 * # DatabasedetailsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('DatabasedetailsCtrl', function ($scope, Tests) {
    $scope.test = Tests[$routeParams.id];
  });
