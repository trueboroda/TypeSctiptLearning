/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var watch = require('gulp-watch');
var del = require('del');

var paths = {
	src:{
		scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
		node_modules: 'node_modules/'
	},
	wwwroot:{
		root: 'wwwroot/',
		js:  'wwwroot/js/',
		lib: 'wwwroot/lib/',
		css: 'wwwroot/css/'
	}

};

gulp.task('clean:js', function () {
	return del([paths.wwwroot.js + '**/*']);
});

gulp.task('clean:libs', function () {
	return del([paths.wwwroot.lib + '**/*']);
});


gulp.task('build', ['clean:js'], function () {
	gulp.src(paths.src.scripts).pipe(gulp.dest(paths.wwwroot.js))
});


gulp.task("copy:libs", ["clean:libs"], function () {
	var src_libs = {
		
	}

	for (var destinationDir in src_libs) {
		gulp.src(paths.src.node_modules+ src_libs[destinationDir])
			.pipe(gulp.dest(paths.wwwroot.lib + destinationDir));
	}

});


gulp.task('default', ['build', 'copy:libs'], function () {
	
});

gulp.task('watch', function () {
	gulp.watch(paths.src.scripts, ['default']);
});