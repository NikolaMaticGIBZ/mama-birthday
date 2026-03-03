$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
		$('#b88').animate({ top: 240, left: vw + 350 }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function getBounds() 
	{
		return {
			maxX: $(window).width() - 100,
			maxY: $(window).height() - 180
		};
	}

	function loopOne() 
	{
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b1').animate({ left: randleft, top: randtop }, 8000, function () {
			loopOne();
		});
	}
	function loopTwo() 
	{
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b2').animate({ left: randleft, top: randtop }, 8000, function () {
			loopTwo();
		});
	}
	function loopThree() 
	{
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b3').animate({ left: randleft, top: randtop }, 8000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b4').animate({ left: randleft, top: randtop }, 8000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b5').animate({ left: randleft, top: randtop }, 8000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b6').animate({ left: randleft, top: randtop }, 8000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b7').animate({ left: randleft, top: randtop }, 8000, function () {
			loopSeven();
		});
	}
	function loopEight() {
		var bounds = getBounds();
		var randleft = Math.random() * bounds.maxX;
		var randtop = Math.random() * bounds.maxY;
		$('#b8').animate({ left: randleft, top: randtop }, 8000, function () {
			loopEight();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		var cake = $('.cake');
		var cakeOffset = cake.offset();
		var cakeWidth = cake.outerWidth();

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b8').attr('id', 'b88')

		var centerX = cakeOffset.left + (cakeWidth / 2);
		var topPosition = cakeOffset.top - 140; 
		
		var spacing = 55;

		var balloonWidth = 70; 
		var totalWidth = spacing * 7; 

		var start = centerX - (totalWidth / 2) - (balloonWidth / 2) - 28;

		$('#b11').animate({ top: topPosition, left: start + spacing * 0 }, 500);
		$('#b22').animate({ top: topPosition, left: start + spacing * 1 }, 500);
		$('#b33').animate({ top: topPosition, left: start + spacing * 2 }, 500);
		$('#b44').animate({ top: topPosition, left: start + spacing * 3 }, 500);
		$('#b55').animate({ top: topPosition, left: start + spacing * 4 }, 500);
		$('#b66').animate({ top: topPosition, left: start + spacing * 5 }, 500);
		$('#b77').animate({ top: topPosition, left: start + spacing * 6 }, 500);
		$('#b88').animate({ top: topPosition, left: start + spacing * 7 }, 500);

		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {

		$(this).fadeOut('slow');

		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
			msgLoop(1);   // WICHTIG: Start bei 1
		});

		function msgLoop(i) {

			var total = $('.message p').length;

			$("p:nth-child(" + i + ")")
				.fadeIn(1500)
				.delay(3500)
				.fadeOut(1000)
				.promise()
				.done(function () {

					if (i < total) {
						msgLoop(i + 1);
					} else {
						$('.cake').fadeIn('fast', function () {
							$('.heart-img').fadeIn(2000);
						});
					}

				});
			}

		});
	});




//alert('hello');