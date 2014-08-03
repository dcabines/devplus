'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/state1");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/partial1.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/partial2.html"
    });
});