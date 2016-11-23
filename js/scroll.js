runScript();
function runScript() {
    // Script that does something and depends on jQuery being there.
    if( window.$ ) {
			$(function() {
				$('.page-scroll').bind('click', function(event) {
						var $anchor = $(this);
						$('html, body').stop().animate({
								scrollTop: $($anchor.attr('href')).offset().top - $('.navbar.navbar-custom').height()
						}, 1500, 'easeInOutExpo');
						event.preventDefault();
				});
			});
    } else {
        // wait 50 milliseconds and try again.
        window.setTimeout( runScript, 50 );
    }
}
