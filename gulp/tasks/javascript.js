import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

function javascript() {

    const { gulp, path, plugins } = config

    return gulp.src(path.src.js)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(plugins.sourcemaps.init())
            .pipe(uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(path.build.js))

}

export default javascript;
