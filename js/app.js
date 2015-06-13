/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function() {

  var docElem = document.documentElement,
    header = $('.main-nav'),
    didScroll = false,
    changeHeaderOn = 50;

  function init() {
    window.addEventListener('scroll', function(event) {
      if(!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }, false);
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      header.addClass('navbar-shrink');
    } else {
      header.removeClass('navbar-shrink');
    }
    if (sy >= 500) {
      $('li:not(.act) a').fadeOut(function() {
        $('li.act a').fadeIn();  
      });
      
    } else {
      $('li.act a').fadeOut(function() {
        $('li:not(.act) a').fadeIn();
      });
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();