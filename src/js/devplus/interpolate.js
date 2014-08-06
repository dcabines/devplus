'use strict';

var appPackage = require('../../../package');

module.exports = function() {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, appPackage.version);
	};
};