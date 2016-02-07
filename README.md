# simplysass
A set of Sass mixins for use in projects

## Install
```shell
npm install simplysass
```

## With Eyeglass
If you have eyeglass installed, no more work is needed as this mixin is setup to be a eyeglass module out of the box.

## With Gulp
```javascript
var simplysass = require('simplysass').includePaths;

gulp.task('css', function(){
    gulp.src('sass/**/*.scss')
    .pipe(sass({
        includePaths: simplysass
    }))
    .pipe(gulp.dest('css'));
});
```

## Usage
So far, there are five mixins included (with more to come):

### center-element
Will using absolute positioning & transforms, center align (either horizontally or vertically) an element.
```sass
.element {
  @include center-element('vertical');
}
```
or
```sass
.element {
  @include center-element('horizontal');
}
```

### clearfix
```sass
.element {
  @include clearfix;
}
```
or
```sass
.element {
  @extend %clearfix;
}
```
