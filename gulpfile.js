var gulp = require('gulp');
var gp =require('gulp-load-plugins')();

var paths = {
	app: 'app/'
 };

 gulp.task('connect',function() {
 	gp.connect.server({
 		root: [
 			paths.app
 		],
 		livereload: true
 	});

 });

 gulp.task('html', function(){

 	gulp.src(paths.app +'/**/*')
 		.pipe(gp.connect.reload());

 });

 gulp.task('watch', function() {

 	gulp.watch(paths.app, ['html']);
 		gulp.watch([paths.app + '/**/*'], ['html']);
 });

 gulp.task('server', ['connect', 'watch']);