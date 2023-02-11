const {src, dest, watch, series} = require('gulp');

var sass = require("gulp-sass")((require("sass")))

function build()
{
    return src("cats_css_library/**/*.scss").pipe(sass()).pipe(dest("css"))
}

function watchTask()
{
    const isWatch = process.argv.find(arg => arg.includes("--watch")) ? true : false

    if (isWatch)
    {
        return watch("cats_css_library/**/*.scss", build)
    }else
    {
        return build()
    }

    
}

exports.default = series(build, watchTask)