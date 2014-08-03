'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/state1");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/partial1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/partial2.html"
    });
});