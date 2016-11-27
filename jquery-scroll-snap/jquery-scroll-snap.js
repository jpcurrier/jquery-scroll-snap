/*! jQuery Scroll Snap 1.0.0 | MIT *
 * https://github.com/jpcurrier/jquery-scroll-snap !*/
( function( $ ){
  $.fn.scrollSnap = function( options ){

    // default options
    var settings = $.extend({
      speed: 400
    }, options );

    var scrollStop,
      lastScrollTop =
        window.pageYOffset ||
          document.documentElement.scrollTop ||
            document.body.scrollTop ||
              0;

    function snapScroll( $snap, scroll, direction ){
      if( $( 'body' ).hasClass( 'lock-scroll' ) )
        return;

      var windowHeight = $( window ).height();
      direction = typeof direction !== 'undefined' ? direction : 'up';

      var scrollTo = false;
      $snap.each( function(){
        if(
          scroll <= $( this ).offset().top && (
            // advance
            ( direction == 'down' && scroll >= $( this ).offset().top - ( windowHeight * 2 / 3 ) ) ||
            // stabilize
            ( direction == 'up' && scroll >= $( this ).offset().top - ( windowHeight / 3 ) )
          ) ||
          scroll >= $( this ).offset().top && (
            // advance
            ( direction == 'up' && scroll <= $( this ).offset().top + ( windowHeight * 2 / 3 ) ) ||
            // stabilize
            ( direction == 'down' && scroll <= $( this ).offset().top + ( windowHeight / 3 ) )
          )
        ){
          $( 'body:not( .lock-scroll )' ).addClass( 'lock-scroll' );
          scrollTo = $( this ).offset().top;
        }
      } );

      if( scrollTo !== false ){
        $( 'html, body' ).animate(
          { scrollTop: scrollTo },
          settings.speed,
          function(){
            $( 'body.lock-scroll' ).removeClass( 'lock-scroll' );
            /*setTimeout( function(){
              $( 'body.lock-scroll' ).removeClass( 'lock-scroll' );
            }, 600 );*/
          }
        );
      }
    }

    var $snap = this;
    $( window ).on( 'scroll', function(){
      var scroll =
        window.pageYOffset ||
          document.documentElement.scrollTop ||
            document.body.scrollTop ||
              0;

			var direction = 'up';
      if( scroll > lastScrollTop )
        direction = 'down';

      lastScrollTop = scroll;

      clearTimeout( scrollStop );
      scrollStop = setTimeout( function(){
        snapScroll( $snap, scroll, direction );
      }, 200 );
    } );
  };
} )( jQuery );