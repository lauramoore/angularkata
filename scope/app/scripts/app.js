'use strict';

angular.module('scopeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basic', {
        templateUrl: 'views/basic.html',
        controller: 'BasicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
