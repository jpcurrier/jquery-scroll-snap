# jQuery Scroll Snap

This jQuery plugin snaps the browser window to the top of specified elements when the user scrolls within a certain proximity of specified element tops. Requires jQuery 1.7+.

This plugin more-or-less mirrors the behavior of CSS Scroll Snaps (https://drafts.csswg.org/css-scroll-snap/), which are not, as of the writing of this plugin, widely supported yet: http://caniuse.com/#feat=css-snappoints

Support: Chrome, Firefox, Safari, IE8+

## Setup

Include jQuery (1.7+) and the jQuery Scroll Snap plugin files.

```html
<!-- jQuery Scroll Snap Stylesheet -->
<link rel="stylesheet" href="jquery-scroll-snap/jquery-scroll-snap.css">

<!-- jQuery Scroll Snap Plugin -->
<script src="jquery-scroll-snap/jquery-scroll-snap.js"></script>
```

Call the plugin with jQuery on elements whose tops you want to snap to the browser window.

In the following example code, elements with the class `snap` will snap to the top of the window.

```javascript
// default options
$( '.snap' ).scrollSnap();

// custom options
$( '.snap' ).scrollSnap({
  speed: 300
});
```

## Settings

There is only one setting: `speed`. This sets the speed with which the plugin scrolls the window up/down to snap points. The value is set in milliseconds and the default value is `400`.