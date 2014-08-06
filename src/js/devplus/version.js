'use strict';

var appPackage = require('../../../package');

module.exports = function() {
	return {
		restrict: 'AE',
		template: appPackage.version
	};
};