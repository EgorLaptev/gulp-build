import zipPlug from 'gulp-zip';

function zip() {

    const { gulp, path, plugins } = config

    plugins.del(path.zip) // Remove old version

    return gulp.src(`${path.build.folder}/**/*.*`)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'ZIP',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(zipPlug(path.zip))
        .pipe(gulp.dest('./'))
}

export default zip
