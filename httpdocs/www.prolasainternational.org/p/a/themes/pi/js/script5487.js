/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    
    
// To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.mobile_menu = {
    attach: function (context, settings) {
      // Place your code here.
      var $navigation,
        $navigation_region;

      $navigation = $("#navigation .region-nav-compact");
      $navigation_region = $('.region-navigation');

      /* prepend menu icon */
      $navigation.prepend('<div id="mobile-menu" class="hidden-md hidden-lg">Menu</div>');
      $navigation_region.addClass('menu-hidden');

      /* toggle nav */
      $("#mobile-menu").on("click", function () {
//          $navigation_region.toggleClass("open");
        $(this).toggleClass("active");
        $navigation_region.toggleClass('active');
      });

      $("#search-block-form input[type='text']").each(function () {
        $(this).attr("placeholder", $(this).prev("label").text());
      });
    }
  };

  Drupal.behaviors.mobile_submenu = {
    attach: function (context, settings) {
      // Place your code here.
      var $navigation,
        $navigation_region;

      $navigation = $("#subnav");
      $navigation_region = $('.region-subnav .block-menu-block');

      /* prepend menu icon */
      $navigation.prepend('<div id="mobile-submenu" class="hidden-md hidden-lg">Sub-Menu</div>');
      $navigation_region.addClass('menu-hidden');

      /* toggle nav */
      $("#mobile-submenu").on("click", function () {
        $(this).toggleClass("active");
        $navigation_region.toggleClass('active');
      });
    }
  };

  Drupal.behaviors.sponsor_tabs = {
    attach: function (context, settings) {

      $(".tabnav li a.job").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          //do nothing
        } else {
          $(".tabcontent .panel.active").hide().removeClass("active");
          $(".tabcontent .panel.job").stop(true, true).fadeIn(500).addClass("active");
          $(".tabnav li a.active").removeClass("active");
          $(".tabnav li a.job").addClass("active");
        }
      });
      $(".tabnav li a.business").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          //do nothing
        } else {
          $(".tabcontent .panel.active").hide().removeClass("active");
          $(".tabcontent .panel.business").stop(true, true).fadeIn(500).addClass("active");
          $(".tabnav li a.active").removeClass("active");
          $(".tabnav li a.business").addClass("active");
        }
      });
      $(".tabnav li a.rights").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          //do nothing
        } else {
          $(".tabcontent .panel.active").hide().removeClass("active");
          $(".tabcontent .panel.rights").stop(true, true).fadeIn(500).addClass("active");
          $(".tabnav li a.active").removeClass("active");
          $(".tabnav li a.rights").addClass("active");
        }
      });
      $(".tabnav li a.nutrition").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          //do nothing
        } else {
          $(".tabcontent .panel.active").hide().removeClass("active");
          $(".tabcontent .panel.nutrition").stop(true, true).fadeIn(500).addClass("active");
          $(".tabnav li a.active").removeClass("active");
          $(".tabnav li a.nutrition").addClass("active");
        }
      });
      $(".tabnav li a.support").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          //do nothing
        } else {
          $(".tabcontent .panel.active").hide().removeClass("active");
          $(".tabcontent .panel.support").stop(true, true).fadeIn(500).addClass("active");
          $(".tabnav li a.active").removeClass("active");
          $(".tabnav li a.support").addClass("active");
        }
      });
    }
  };
    
     Drupal.behaviors.storiesfeature = {
    attach: function (context, settings) {
      $(window).load(function () {
        $('.flexslider').flexslider({
          animation: "slide",
          slideshow: false,
          controlNav: false
        });
      });
    }
  };
    
    $(document).ready(function(){
      $('.node-type-country .field-type-link-field a').attr('target', '_blank');
      $('.node-type-campaigns .field-type-link-field a').attr('target', '_blank');
      $('.node-type-page .field-type-link-field a').attr('target', '_blank');
      $('.sidebar .field-type-link-field a').attr('target', '_blank');
    });

})(jQuery, Drupal, this, this.document);
