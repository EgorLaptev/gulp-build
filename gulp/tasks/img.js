import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

function img() {

    const { gulp, path, plugins } = config

    return gulp.src(path.src.img)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'IMG',
                message: 'Error: <%= error.message %>'
            })
        ))
        // webp images
        .pipe(plugins.newer(path.build.img))
        .pipe(webp())
        .pipe(gulp.dest(path.build.img))
        // other bitmap images
        .pipe(gulp.src(path.src.img))
        .pipe(plugins.newer(path.build.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // [0-7]
        }))
        .pipe(gulp.dest(path.build.img))
        // vector images (without compression)
        .pipe(gulp.src(path.src.svg))
        .pipe(gulp.dest(path.build.img))
}

export default img;
