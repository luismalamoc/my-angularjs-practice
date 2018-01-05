'use strict';

/**
 * @ngdoc overview
 * @name myAngularjsPracticeApp
 * @description
 * # myAngularjsPracticeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('myAngularjsPracticeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
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
      .otherwise({
        redirectTo: '/'
      });
  });
