import include from 'gulp-file-include';
import toWebp from 'gulp-webp-html-nosvg';
import version from 'gulp-version-number';

function html() {

    const { gulp, path, plugins } = config

    return gulp.src(path.src.html)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(include())
        .pipe(plugins.replace(/@img\//g, 'img/'))
        .pipe(toWebp())
        .pipe(version({
            value: '%DT%',
            append: {
                key: '_v',
                cover: 0,
                to: ['css', 'js'],
            },
            output: { file: 'gulp/version.json' }
        }))
        .pipe(gulp.dest(path.build.html))

}

export default html