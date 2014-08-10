'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var replace = require('gulp-replace');
var wrapper = require('gulp-wrapper');
var minifyHtml = require('gulp-minify-html');
var merge = require('merge-stream');

// lint
gulp.task('lint', function(){
	return gulp.src(['*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// browserify
gulp.task('browserify', function(){
	return gulp.src('node_modules/devplus/js/main.js')
	.pipe(browserify())
	.pipe(concat('bundle.js'))
	.pipe(uglify({mangle:false}))
	.pipe(gulp.dest('public/js'));
});

// wrap browserify
gulp.task('wrap-browserify', ['browserify'], function(){
	return gulp.src(['public/js/bundle.js'])
    .pipe(wrapper({
       header: '<script>',
       footer: '</script>'
    }))
    .pipe(concat('script.html'))
    .pipe(minifyHtml())
    .pipe(gulp.dest('views'));
});

// minify
gulp.task('minify', function(){
	return gulp.src('node_modules/devplus/less/app.less')
	.pipe(less())
	.pipe(concat('bundle.css'))
	.pipe(minify())
	.pipe(gulp.dest('public/css'));
});

// wrap css
gulp.task('wrap-css', ['minify'], function(){
	return gulp.src(['public/css/bundle.css'])
    .pipe(wrapper({
       header: '<style>',
       footer: '</style>'
    }))
    .pipe(concat('style.html'))
    .pipe(minifyHtml())
    .pipe(gulp.dest('views'));
});

// templates
gulp.task('templates', function(){
	return gulp.src(['node_modules/devplus/templates/*.html'])
    .pipe(wrapper({
       header: '<script type="text/ng-template" id="${filename}">',
       footer: '</script>'
    }))
    .pipe(concat('templates.html'))
    .pipe(minifyHtml())
    .pipe(gulp.dest('views'));
});

// fonts
gulp.task('fonts', function(){
	return gulp.src('src/components/bootstrap/fonts/*')
	.pipe(gulp.dest('public/fonts'));
});

// jslibs
gulp.task('jslibs', function(){
	return gulp.src([
		'bower_components/angular/angular.js',
		'bower_components/angular-ui-router/release/angular-ui-router.js'
	])
	.pipe(concat('libs.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'));
});

// csslibs
gulp.task('csslibs', function() {
	var todo =
		gulp.src('bower_components/todomvc-common/base.css')
		.pipe(replace('body', '#body')); // because they dick with my body too much

	var bootstrap =
		gulp.src('bower_components/bootstrap/less/bootstrap.less')
		.pipe(less());

	return merge(bootstrap, todo)
	.pipe(concat('libs.css'))
	.pipe(minify())
	.pipe(gulp.dest('public/css'));
});

// appInsights
gulp.task('appInsights', function(){
	return gulp.src(['src/js/appInsights.js'])
	.pipe(uglify())
	.pipe(gulp.dest('views/js'));
});

gulp.task('default', ['lint', 'wrap-browserify', 'wrap-css', 'templates']);
gulp.task('libs', ['jslibs', 'csslibs', 'appInsights', 'fonts']);