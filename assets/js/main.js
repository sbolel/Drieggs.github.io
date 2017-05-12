/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
  var settings = {
    // Parallax background effect?
    parallax: true,

    // Parallax factor (lower = more intense, higher = less intense).
    parallaxFactor: 20
  };

  skel.breakpoints({
    xlarge: '(max-width: 1800px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)'
  });

  $(function() {
    var $window = $(window),
      $body = $('body'),
      $header = $('#header');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

    // Touch?
    if (skel.vars.mobile) {

      // Turn on touch mode.
      $body.addClass('is-touch');

      // Height fix (mostly for iOS).
      window.setTimeout(function() {
        $window.scrollTop($window.scrollTop() + 1);
      }, 0);

    }

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Header.

    // Parallax background.

    // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
    if (skel.vars.browser == 'ie' ||
      skel.vars.mobile)
      settings.parallax = false;

    if (settings.parallax) {

      skel.on('change', function() {

        if (skel.breakpoint('medium').active) {

          $window.off('scroll.strata_parallax');
          $header.css('background-position', 'top left, center center');

        } else {

          $header.css('background-position', 'left 0px');

          $window.on('scroll.strata_parallax', function() {
            $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
          });

        }

      });

    }

    // Main Sections: Two.

    // Lightbox gallery.
    $window.on('load', function() {

      $('#two').poptrox({
        caption: function($a) {
          return $a.next('h3').text();
        },
        overlayColor: '#2c2c2c',
        overlayOpacity: 0.85,
        popupCloserText: '',
        popupLoaderText: '',
        selector: 'a.image',
        usePopupCaption: true,
        usePopupDefaultStyling: false,
        usePopupEasyClose: true,
        usePopupNav: true,
        windowMargin: (skel.breakpoint('small').active ? 0 : 50)
      });

    });

		function locationHashChanged() {
	    if (!location.hash) {
	    	$('#snippet').load('snippets/home.html');
	    }
		}

		window.onhashchange = locationHashChanged;

    //Keyman Toggle
    $('#skmBtn').click(function() {
      $('#snippet').load('snippets/skm.html', function() {
        window.location.hash = 'skm';
      });
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 0);
    });
    $('#sadoBtn').click(function() {
      $('#snippet').load('snippets/sado.html', function() {
        window.location.hash = 'sado';
      });
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 0);
    });
    $('#keymanBtn').click(function() {
      $('#snippet').load('snippets/keyman.html', function() {
        window.location.hash = 'keyman';
      });
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 0);
    });
    $('#olliBtn').click(function() {
      $('#snippet').load('snippets/olli.html', function() {
        window.location.hash = 'olli';
      });
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 0);
    });
    $(document).ready(function() {
      $('html, body').animate({
        scrollTop: $("#main").offset().top
      }, 200);
    });
  });

})(jQuery);
