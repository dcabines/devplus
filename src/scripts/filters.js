'use strict';

require('./components/angular/angular');

/* Filters */

angular.module('devplus.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
