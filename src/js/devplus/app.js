/* globals angular */

'use strict';

angular.module('devplus', [
	'ui.router',
	'devplus.filters',
	'devplus.services',
	'devplus.directives',
	'devplus.controllers'
])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/partial1.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'partials/partial2.html'
		});
}]);