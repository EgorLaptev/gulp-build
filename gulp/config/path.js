/*
*  File path settings
* */

const
    sourceFolder = `src`,
    buildFolder  = `build`;

const path = {
    src: {
        folder: sourceFolder,
        js: `${sourceFolder}/js/**/*.js`,
        css: `${sourceFolder}/css/**/*.{css,scss,sass}`,
        img: `${sourceFolder}/img/**/*.{jpg,jpeg,png,gif,webp,bmp}`,
        svg: `${sourceFolder}/img/**/*.svg`,
        html: `${sourceFolder}/html/**/*.html`,
        fonts: `${sourceFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
    },
    build: {
        folder: buildFolder,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        img: `${buildFolder}/img/`,
        html: `${buildFolder}/html/`,
        fonts: `${buildFolder}/fonts/`,
    },
    watch: {
        js: `${sourceFolder}/js/**/*.js`,
        css: `${sourceFolder}/css/**/*.{css,scss,sass}`,
        img: `${sourceFolder}/img/**/*.{jpg,jpeg,png,gif,webp,bmp,svg}`,
        html: `${sourceFolder}/html/**/*.html`,
        fonts: `${sourceFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
    },
    drop: `${buildFolder}`,
    ftp: ``,
    zip: `project.zip` // Name of zip-file with project
}

export default path