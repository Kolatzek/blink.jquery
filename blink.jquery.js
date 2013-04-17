/*!
 * jQuery blink shows a blinking cursor known from a tty or the matrix movie
 * Author: Kolatzek
 * Licensed under the MIT license
 */
(function( $ ) {
    var settings = {
    timeout: 500,
    color: '#66FF33'
  };
  var methods = {
    init: function( options ) {
      var opt = $.extend({}, settings, options);
      if($('#blinkjquery').length == 0) {
        $('body').append($('<span id="blink">_</span>')); 
      }
      return this.each(function(){
        $(this).bind('mouseenter.blink', opt, methods.blink);
        $(this).bind('mouseleave.blink', opt, methods.unblink);
      });
    },
    blink: function( event ) {
      var settings = $.extend({}, event.data);
      $('#blink').css({'background-color': settings.color, 'color': 'transparent'});
      $(event.target).append($('#blink'));
      $('#blink').show();
      methods.startblink(event);
    },
    unblink: function( settings ) {
      clearTimeout($.blinktimeout);
      $('#blink').css({'background-color': 'transparent', 'color': settings.color});
      $('body').append($('#blink'));
      $('#blink').hide();
    },
   startblink: function(event){
    var opt = $.extend({}, settings, event.data);
    $('#blink').css({'background-color': opt.color, 'color': 'transparent'});
    $.blinktimeout = setTimeout(function(){methods.stopblink(event);}, opt.timeout);
  },
   stopblink: function(event){
    var opt = $.extend({}, settings, event.data);
    $('#blink').css({'background-color': 'transparent', 'color': opt.color});
    $.blinktimeout = setTimeout(function(){methods.startblink(event);}, opt.timeout);
  }
  };
  $.fn.blink = function(method){
    if ( methods[method] ) {
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
    } else {
        $.error( 'Method ' + method + ' does not exist on jQuery.blink' );
    }
  }
})( jQuery );
