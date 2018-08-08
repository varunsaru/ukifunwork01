/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/298806717',function(sound){
    $('#start').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/179413972',function(sound){
    $('#start1').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop1').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/343922660',function(sound){
    $('#start2').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop2').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/309299441',function(sound){
    $('#start3').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop3').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/283157059',function(sound){
    $('#start4').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop4').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/258588058',function(sound){
    $('#start5').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop5').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/335973348',function(sound){
    $('#start6').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop6').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/245201802',function(sound){
    $('#start7').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop7').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/338993249',function(sound){
    $('#start8').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop8').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/291728409',function(sound){
    $('#start9').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop9').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/253442397',function(sound){
    $('#start10').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop10').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  SC.stream('/tracks/306265538',function(sound){
    $('#start11').click(function(e) {
               e.preventDefault();
               sound.start();
             });

    $('#stop11').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

      });

});
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);
