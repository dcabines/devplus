/* globals angular */

'use strict';

angular.module('devplus.directives', [])
	.directive('appVersion', ['version', function(version) {
		return {
			restrict: 'AE',
			template: version
		};
}]);
