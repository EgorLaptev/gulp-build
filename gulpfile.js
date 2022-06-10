import gulp from 'gulp';

/* Import configs */
import path from './gulp/config/path.js';
import plugins from "./gulp/config/plugins.js";

global.config = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

/* Import tasks */
import js from './gulp/tasks/javascript.js';
import css from './gulp/tasks/css.js';
import img from './gulp/tasks/img.js';
import zip from './gulp/tasks/zip.js';
import html from './gulp/tasks/html.js';
import drop from './gulp/tasks/drop.js';
import fonts from './gulp/tasks/fonts.js';

function build(cd) {
    js()
    css()
    img()
    html()
    fonts()
    cd()
}

function watch(cd) {
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.css, css)
    gulp.watch(path.watch.img, img)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.fonts, fonts)
    cd()
}

/* Export tasks */
gulp.task('default', gulp.series(build, watch))
gulp.task('watch', gulp.series(build, watch))
gulp.task('build', build)
gulp.task('drop', drop)
gulp.task('zip', zip)
