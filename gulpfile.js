var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	merge = require('merge2'),
	Server = require('karma').Server;

gulp.task('build-ts', function(){
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'output.js',
			declaration: true,
		}));
	return merge([
    	tsResult.dts.pipe(gulp.dest('release/definitions')),
    	tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});
	
gulp.task('test', function(done){
	new Server({
		configFile: __dirname + '/karma.conf.js',
		// singleRun: true
		}, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', ['build-ts'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['build-ts', 'test']);
});

gulp.task('default', ['tdd']);