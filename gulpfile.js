'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minify = require('gulp-minify-css');

// clean
gulp.task('clean', function(){
	return gulp.src(['dist/*'], { read: false, }).pipe(clean());
});

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
	gulp.src(['src/scripts/app.js'])
	.pipe(browserify({
		insertGlobals: true,
		debug: true
	}))
	.pipe(concat('bundle.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/public/js'));

	gulp.src([
		'bower_components/bootstrap/less/bootstrap.less',
		'bower_components/angular-ui/build/angular-ui',
		'src/styles/app.less'
	])
	.pipe(less())
	.pipe(concat('bundle.css'))
	.pipe(minify())
	.pipe(gulp.dest('dist/public/css'));
});

// copy
gulp.task('copy', ['clean', 'compile'], function(){
	gulp.src('./src/partials/**/*')
	.pipe(gulp.dest('dist/public/partials/'));

	gulp.src('./src/styles/**/*')
	.pipe(gulp.dest('dist/public/css/'));

	gulp.src('./src/server/**/*')
	.pipe(gulp.dest('dist'));

	gulp.src('./bower_components/**/*')
	.pipe(gulp.dest('dist/public/components/'));
});

gulp.task('default', ['copy']);