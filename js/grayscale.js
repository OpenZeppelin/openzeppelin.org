/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse").addClass('background-top-nav');
    } else {
       $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass('background-top-nav');
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.navbar.navbar-custom').height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var height = $('.card').toArray().reduce(function(val, elem) { return Math.max(val, $(elem).height()); }, 0);
    $('.card').height(height + $('.card-cta').height() + 10)
    $('.card-cta').width($('.card-text').width())

    $('.card-cta').click(function(ev) {
      var $anchor = $(this);
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 750, 'easeInOutExpo');
      setTimeout(function() {
        $('#mce-EMAIL')[0].focus();
      }, 750);
    })
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

