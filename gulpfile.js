const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const uglify = require ('gulp-uglify');
const del = require ('del');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const babel = require('gulp-babel');

const jsFiles = [
	'./src/js/slick.min.js',
	'./src/js/main.js'
];

function styles(){
	return gulp.src('./src/sass/main.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('app.css'))
		.pipe(gcmq())
		.pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
        	level: 2
        }))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
}

function scripts(){
	return gulp.src(jsFiles)
		.pipe(concat('app.js'))
		.pipe(babel())
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());
	
}

function watch(){
	browserSync.init({
        server: {
            baseDir: "./"
        },
        // tunnel: true   
    });

	gulp.watch('./src/sass/**/*.sass', styles);
	gulp.watch('./src/js/**/*.js', scripts); 
	gulp.watch('./*.html').on('change', browserSync.reload);
}

function clean(){
	return del(['dist/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('clean', clean);

gulp.task('build', gulp.series(clean,
						gulp.parallel('styles', 'scripts')
						));

gulp.task('dev', gulp.series('build', 'watch'));

