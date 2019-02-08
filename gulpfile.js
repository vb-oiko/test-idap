var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
})

// gulp.task('js', function () {
//     gulp.src('./src/js/*.js')
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(connect.reload())
// })

gulp.task('styles', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
})

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})

gulp.task('img', function () {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img'))
        .pipe(connect.reload())
})

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['styles'])
    gulp.watch('./src/*.html', ['html'])
    // gulp.watch('./src/js/**/*.js', ['js'])
    gulp.watch('./src/img/*.*', ['img'])
})

gulp.task('default', ['html', 'styles', 'img', 'server', 'watch'])
// gulp.task('default', ['html', 'styles', 'js', 'img', 'server', 'watch'])