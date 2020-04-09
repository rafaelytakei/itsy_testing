var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
const browserSync = require("browser-sync").create();
var tsify = require('tsify');
const del = require('del');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
const glob = require('glob');
const fs = require('fs');
const path = require("path");
const rev = require("gulp-rev");
const revdel = require('gulp-rev-delete-original');
const revReplace = require("gulp-rev-replace");
const flatten = require('gulp-flatten');

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
        .pipe(gulp.dest(`${pathsProject['src']()}/assets/css`))
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
    .transform('babelify', {
        presets: ['env'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(plumber())
    .pipe(source('assets/js/bundle.js'))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.stream());
});

gulp.task("clearCss", () => {
    return del([pathsProject['src']('css')]);
});

gulp.task('copy', () => {
    return gulp.src([
            `${pathsProject.src()}/**/*`,
            `!${pathsProject.src('vendors')}/**/*`,
            `!${pathsProject.src('scss')}`,
            `!${pathsProject.src('ts')}`,
        ])
        .pipe(gulp.dest(`${pathsProject.build}`));
});

gulp.task('clear', () => {
    return del([pathsProject.build]);
});

gulp.task('uglify', function () {
    return src([
        `${pathsProject.build}/**/*.js`,
        `!${pathsProject.build}/assets/vendors/**/*.js`
    ])
    .pipe(uglify())
    .pipe(dest(
        `${pathsProject.build}`
    ));
});

function flattenCustom(pathName) {
    const {
        dir
    } = path.parse(pathName);

    return gulp.src([pathName])
        .pipe(flatten({
            includeParents: [1, 1]
        }))
        .pipe(gulp.dest(`${dir.replace(/^src|^\.\/src/g, pathsProject.build)}`));
}

gulp.task('getPaths', () => {
    return glob(`${ pathsProject['src']() }/**/*.{html,htm}`, {
        ignore: [`${pathsProject.src('vendors')}/**/*`]
    }, (er, files) => {
        if (er) throw er;
        /**
         * Versão javascript
         */
        files.map(async res => {
            await fs.readFile(res, 'utf-8', function read(err, data) {
                if (err) throw err;
                const content = data;

                const regScript = /<script.*?src="(.*?)"/g;
                const matchScript = content.match(regScript);
                if (matchScript) {
                    return matchScript.map(resMap => {
                        const regSource = /src="(.*?)"/g;
                        const source = regSource.exec(resMap);
                        if (source[1]) {
                            let newPath = source[1].replace(/^(\..?.|\.)\//g, '');
                            if (/vendors/.test(newPath)) return flattenCustom(`${pathsProject.src()}/${newPath}`);
                        }
                    });

                }
                //  ----- fim
            });
        });
        /**
         * Versão CSS
         */
        files.map(async res => {
            await fs.readFile(res, 'utf-8', function read(err, data) {
                if (err) throw err;
                const content = data;

                const regCss = /<link.*?href="(.*?)"/g;
                const matchCss = content.match(regCss);
                if (matchCss) {
                    return matchCss.map(resMap => {
                        const regSource = /href="(.*?)"/g;
                        const source = regSource.exec(resMap);
                        if (source[1]) {
                            let newPath = source[1].replace(/^(\..?.|\.)\//g, '');
                            if (/vendors/.test(newPath)) return flattenCustom(`${pathsProject.src()}/${newPath}`);
                        }
                    });
                }
            });
        });
        // ---- FIM
    });
});

gulp.task('cleanTrash', () => {
    return del([
        `${pathsProject.build}/assets/scss`,
        `${pathsProject.build}/rev-manifest.json`
    ]);
});

gulp.task("revision", () => {
    var pathBuild = pathsProject.build;
    const ignore = [
        `!${pathBuild}/assets/css/fontawesome/**/*.css`,
        `!${pathBuild}/assets/fonts/**/*.css`
    ];
    return gulp.src([`${pathBuild}/**/*.{css,js}`, ...ignore], {
            base: pathBuild
        })
        .pipe(rev())
        .pipe(gulp.dest(pathBuild))
        .pipe(revdel())
        .pipe(rev.manifest())
        .pipe(gulp.dest(pathBuild));
});

gulp.task("revreplace", () => {
    const manifest = gulp.src(`${pathsProject.build}/rev-manifest.json`);
    return gulp.src(`${pathsProject.build}/**/*.{html,htm}`)
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(pathsProject.build));
});

gulp.task('default', gulp.series("ts", "sass", "server"));
gulp.task('build', gulp.series("clear", "copy", "getPaths", "revision", "revreplace", "cleanTrash"));
