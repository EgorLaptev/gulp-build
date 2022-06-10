/*
*  Common global build plugins
* */

import sourcemaps from 'gulp-sourcemaps';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import clear from 'gulp-clean';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';
import del from 'del';

const plugins = {
    sourcemaps,
    plumber,
    replace,
    rename,
    gulpIf,
    notify,
    newer,
    clear,
    del
}

export default plugins