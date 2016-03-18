'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .factory('Tests', ['$http', function($http){
      return $http.get('/tests');
    }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/database', {
        templateUrl: 'views/database.html',
        controller: 'DatabaseCtrl',
        controllerAs: 'database'
      })
      .when('/database:id', {
        templateUrl: 'views/databasedetails.html',
        controller: 'DatabasedetailsCtrl',
        controllerAs: 'databaseDetails'
      })
      .when('/software', {
        templateUrl: 'views/software.html',
        controller: 'SoftwareCtrl',
        controllerAs: 'software'
      })
      .when('/devops', {
        templateUrl: 'views/devops.html',
        controller: 'DevopsCtrl',
        controllerAs: 'devops'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
