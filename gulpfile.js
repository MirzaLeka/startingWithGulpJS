var gulp = require("gulp");
var uglify = require("gulp-uglify");
var pump = require('pump');
var pipe = require('pipe');

// styles
gulp.task("styles", () => console.log("Startng styles task"));

 // images
 gulp.task("images", () => console.log("Starting images task"));

 // default
 gulp.task("default", () =>  console.log("Starting default task") );

 // scripts 

// #1 WAY

gulp.task("scripts", function()  {
console.log("Starting scripts");
 return gulp.src("public/scripts/main.js")
.pipe(uglify())
.pipe(gulp.dest("public")); 

}); 

// #2 WAY --doesn't work either

/*
gulp.task('scripts', function (cb) {
          console.log("Starting scripts task");
  pump([
      gulp.src("/public/scripts/*.js"),
      uglify(),
      gulp.dest('/public/dist/')
    ],
    cb
  );
}); */