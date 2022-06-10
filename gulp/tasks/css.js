import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";
import prefix from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';

const sass = gulpSass(dartSass)

function css() {

    const { path, gulp, plugins } = config;

    gulp.src(path.src.css)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'CSS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(plugins.sourcemaps.init())
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest(path.build.css))
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(path.build.css))

}

export default css;
