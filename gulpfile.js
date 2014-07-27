var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('hello', function () {
    return gulp.src('hello-world/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('hello-world'));
});