'use strict';

require('./components/angular/angular');

/* Directives */

angular.module('devplus.directives', [])
	.directive('appVersion', ['version', function(version) {
		return {
			restrict: 'AE',
			template: version
		};
}]);
