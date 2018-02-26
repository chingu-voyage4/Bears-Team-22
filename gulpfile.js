var gulp = require('gulp');
var shell = require('gulp-shell')
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

gulp.task('default', function(){
    gulp.start("server","client");
})

gulp.task('server', shell.task('cd backend && yarn start')
/*function (done) {    
   /* exec('cd backend && node routes/index.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
      });*/ 
//}
)

gulp.task('client', shell.task('cd frontend && yarn start')
/*function () {
    exec('cd frontend && yarn start', function (err, stdout, sterr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    })*/
//}
)

gulp.task('install_backend', function(cb) {
    exec('cd backend && yarn install', function(err, stdout, sterr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    })
})

gulp.task('install_frontend',['install backend'], function(cb) {
    exec('cd frontend && yarn install', function(err,stdout, sterr) {
        console.log(stdout);
        console.log(stderr);
    })
})