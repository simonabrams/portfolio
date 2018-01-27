'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const data = require('gulp-data');
const fs = require('fs');

const config = {
    src: './app',
    dest: './dist',
    watchers: {
        match: ['./app/**/*.hbs'],
        tasks: ['templates']
    }
};

gulp.task('sass', function(){
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

// concatenate and minify js and css files1
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        // minify js files
        .pipe(gulpIf('*.js', uglify()))
        // minify css files
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest(config.dest));
});

//  handlebars
gulp.task('templates', function(){
    var templateData = JSON.parse(fs.readFileSync('./app/portfolio-data.json')),
        options = {
            ignorePartials: true,
            batch: [`${config.src}/partials`]
        };

    return gulp.src(`${config.src}/pages/*.hbs`)
        .pipe(handlebars(templateData, options))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./app'));
});

// optimize images
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin({

        }))
        .pipe(gulp.dest(config.dest + '/images'));
});

// copy fonts
gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest( config.dest + '/fonts'));
});

gulp.task('clean:dist', function(){
    return del.sync( config.dest );
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.hbs', ['templates']);
    gulp.watch('app/*.json', ['templates']);
    gulp.watch('app/images/**/', ['images']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', function(callback){
    runSequence('clean:dist', ['sass', 'templates', 'useref', 'images', 'fonts'], callback);
});

gulp.task('default', function(callback){
    runSequence(['sass', 'templates', 'browserSync', 'watch'], callback);
});
