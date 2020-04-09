var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
const browserSync = require("browser-sync").create();
var tsify = require('tsify');
var del = require('del');
var sass = require('gulp-sass');
var paths = {
    pages: ['src/*.html']
};

const pathsProject = {
    src: function (key = false) {
        const base = "./src";
        if (key) {
            const obj = {
                scss: `${base}/assets/scss/**/*.scss`,
                css: `${base}/assets/css/*.css`,
                ts: `${base}/assets/ts/**/*.ts`,
                js: `${base}/assets/js/*.js`,
                vendors: `${base}/assets/vendors`,
                assets: `${base}/assets`
            }
            if (obj[key]) {
                return obj[key];
            }
            return base;
        }
        return base;
    },
    build: "./dist"
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task("server", () => {
    browserSync.init({
        server: {
            baseDir: pathsProject['src']()
        }
    });
    // WATCH FILES
    gulp.watch(pathsProject['src']('scss'), gulp.series(['clearCss', 'sass']));
    gulp.watch(pathsProject['src']('ts'), gulp.series(['ts']));
    gulp.watch(`${pathsProject['src']()}/**/*.{html,js}`).on('change', browserSync.reload);
});

gulp.task("sass", () => {
    return gulp.src(pathsProject['src']('scss'))
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError))
        .pipe(dest(`${pathsProject['src']()}/assets/css`))
        .pipe(browserSync.stream());
});

gulp.task("ts", () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/assets/ts/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('assets/js/bundle.js'))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.stream());
});

gulp.task("clearCss", () => {
    return del([pathsProject['src']('css')]);
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/assets/ts/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('assets/js/bundle.js'))
    .pipe(gulp.dest('src'))
    .pipe(gulp.dest('dist'));
}, "server"));

