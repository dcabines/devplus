'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minify = require('gulp-minify-css');

// lint
gulp.task('lint', function(){
	return gulp.src(['gulpfile.js', 'server.js', 'src/js/*.js', 'src/js/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// browserify
gulp.task('browserify', function(){
	return gulp.src(['src/js/main.js'])
	.pipe(browserify())
	.pipe(concat('bundle.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'));
});

gulp.task('uglify', function(){
	return gulp.src(['src/js/appInsights.js'])
	.pipe(uglify())
	.pipe(gulp.dest('public/js'));
});

// minify
gulp.task('minify', function(){
	return gulp.src([
		'src/components/bootstrap/less/bootstrap.less',
		'src/components/angular-ui/build/angular-ui',
		'src/less/app.less'
	])
	.pipe(less())
	.pipe(concat('bundle.css'))
	.pipe(minify())
	.pipe(gulp.dest('public/css'));
});

gulp.task('default', ['lint', 'browserify', 'uglify', 'minify']);