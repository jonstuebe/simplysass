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

- [center-element](#center-element)
- [clearfix](#clearfix)
- [hide-text](#hide-text)
- [hit-area](#hit-area)
- [position](#position)


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

### hide-text
Hide text for use with background images.
```sass
.element {
  @include hide-text;
}
```

### hit-area
Increase hit area for an element.
```sass
.element {
  @include hit-area(5px); // where 5px = radius
}
```

### position
Quickly set the position of an element. The variables go something like this:
```sass
@include position($position: relative/absolute/fixed; $coords: top right bottom left);
```
So for example if you wanted to have an element be positioned absolutely with a top of 20px and left of 20px, you could simply write:
```sass
@include position(absolute, 20px null null 20px);
```
To speed up this process, there is also a few other mixins available:
```sass
@include position-tl($position, $top $left);
@include position-tr($position, $top $right);
@include position-bl($position, $bottom $right);
@include position-br($position, $bottom $right);
```
