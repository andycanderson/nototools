const gulp = require('gulp');
const each = require('gulp-each');

gulp.task('buildFonts', () => {
  return gulp.src(['./merged_fonts/*.*'])
    .pipe(each((content, file, callback) => {
      const newContent = Buffer.from(content).toString('base64');
      callback(null, newContent);
    }, 'buffer'))
    .pipe(each((content, file, callback) => {
      const newContent = content;
      callback(null, newContent);
    }, 'buffer'))
    .pipe(gulp.dest('./build'));
});