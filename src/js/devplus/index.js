/* globals angular*/

var routes = require('./routes');
var interpolate = require('./interpolate');
var version = require('./version');

angular.module('devplus', ['ui.router'])
.config(routes)
.filter('interpolate', interpolate)
.directive('appVersion', version);