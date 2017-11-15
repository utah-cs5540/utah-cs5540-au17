/*jslint browser: true*/
/*global $, jQuery, console*/
$(function () {
  'use strict';
  
  // encapsultes our app all in one variable
  var app = (function () {
    var init,
      contentLoad,
      stickyNavCheck,
      content = jQuery('#content'),
      urlHash = window.location.hash.replace('#', ''),
      animDuration = 150,
      loadPathPrefix = 'subpages/',
      loadPathSuffix = '.html',
      fullLoadPath;

    // runs on page load
    init = function () {
      
      // set up navigation page change
      jQuery('nav ul li').on('click', function (e) {
        var clickedTarget = jQuery(e.target);
        contentLoad(clickedTarget.attr('id'));
      });
      
      // set up sticky nav
      jQuery(window).on('scroll', function () {
        stickyNavCheck();
      });
    
      // inital page load correct content
      if (urlHash) {
        contentLoad(urlHash);
      } else {
        contentLoad('overview');
      }
    };
    
    contentLoad = function (name) {
      jQuery('.active').removeClass('active');
      jQuery('nav ul li#' + name).addClass('active');
      content.fadeOut(animDuration, function () {
        content.load('subpages/' + name + '.html', function () {
          window.location.hash = name;
          content.fadeIn(animDuration);
        });
      });
    };
    
    // sticky nav keeps the nav "pinned" to the top of the page
    stickyNavCheck = function () {
      var nav = jQuery('nav'),
        navHeight = nav.height(),
        content = jQuery('#content');
      if (window.scrollY >= 123) {
        nav.addClass('sticky');
        content.css('margin-top', navHeight + 20 + 'px');
      } else {
        nav.removeAttr('class');
        content.removeAttr('style');
      }
    };

    return {
      init: function () {
        init();
      }
    };
  }());

  app.init();
});
