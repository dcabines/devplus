/* globals angular */

'use strict';

angular.module('devplus.controllers', [])
	.controller('MyCtrl1', ['$scope', function($scope) {
		$scope.temp = 'bob';
	}])
	.controller('MyCtrl2', ['$scope', function($scope) {
		$scope.temp = 'bob';
}]);