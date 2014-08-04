'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minify = require('gulp-minify-css');

// lint
gulp.task('lint', function(){
	gulp.src('./src/scripts/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));

	gulp.src('./src/server.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// compile
gulp.task('compile', function(){
	gulp.src(['./src/scripts/app.js'])
	.pipe(browserify({
		insertGlobals: true,
		debug: true
	}))
	.pipe(concat('bundle.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public/js'));

	gulp.src([
		'bower_components/bootstrap/less/bootstrap.less',
		'bower_components/angular-ui/build/angular-ui',
		'src/styles/app.less'
	])
	.pipe(less())
	.pipe(concat('bundle.css'))
	.pipe(minify())
	.pipe(gulp.dest('./public/css'));
});

// copy
gulp.task('copy', ['compile'], function(){
	gulp.src('./src/partials/**/*')
	.pipe(gulp.dest('./public/partials/'));

	gulp.src('./src/styles/**/*')
	.pipe(gulp.dest('./public/css/'));

	gulp.src('./bower_components/**/*')
	.pipe(gulp.dest('./public/components/'));

	gulp.src('./src/server/**/*')
	.pipe(gulp.dest('./'));
});

gulp.task('default', ['copy']);