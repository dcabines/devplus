(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"name": "devplus",
	"version": "2.0.0",
	"private": true,
	"scripts":{
		"start":"node server.js"
	},
	"dependencies": {
		"express": "*",
		"jade": "*"
	},
		"devDependencies": {
		"gulp": "*",
		"browserify": "*",
		"gulp-concat": "*",
		"gulp-jshint": "*",
		"gulp-browserify": "*",
		"gulp-uglify": "*",
		"gulp-less": "*",
		"gulp-minify-css": "*"
	}
}
},{}],2:[function(require,module,exports){
/* globals angular*/

var routes = require('./routes');
var interpolate = require('./interpolate');
var version = require('./version');

angular.module('devplus', ['ui.router'])
.config(routes)
.filter('interpolate', interpolate)
.directive('appVersion', version);
},{"./interpolate":3,"./routes":4,"./version":5}],3:[function(require,module,exports){
'use strict';

var appPackage = require('../../../package');

module.exports = function() {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, appPackage.version);
	};
};
},{"../../../package":1}],4:[function(require,module,exports){
'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html'
		})
		.state('todo', {
			url: '/todo',
			templateUrl: 'partials/todo.html'
	});
};
},{}],5:[function(require,module,exports){
'use strict';

var appPackage = require('../../../package');

module.exports = function() {
	return {
		restrict: 'AE',
		template: appPackage.version
	};
};
},{"../../../package":1}],6:[function(require,module,exports){
require('./devplus');
},{"./devplus":2}]},{},[6])