function mainmenu(){
	$(" #main-nav ul ").css({display: "none"});
	// Main dropdown functions
	$(" #main-nav li").hover(function(){
        $(this).find('ul:first').slideDown('fast', 'easeOutExpo');
        	var elm = $('ul:first', this);
		    var off = elm .offset();
		    var l = off.left;
		    var w = elm.width();
		    var docW = $(".wrap2").width();
		    var isEntirelyVisible = (l+ w <= docW);

		    if ( ! isEntirelyVisible ) {
		        $(this).find('ul').addClass('edge');
		    } else {
		        $(this).removeClass('edge');
		    }
        },function(){
        $(this).find('ul:first').slideUp('fast', 'easeOutExpo');
    });
}

$(document).ready(function() {
		// Start main nav dropdown function
		mainmenu();
		$('ul.main-nav > li').addClass('top_level');
		$('#main-nav ul').addClass('dropdown_1');
		$('.dropdown_1 ul').addClass('dropdown_2').removeClass('dropdown_1');
		$('#main-nav li:has(> ul)').addClass('parent');
		// Save main nav html
		var navHtml = $('#main-nav').html();
		// Populate mobile nav html
		$('#alt-nav').html(navHtml);
		// Toggle mobile nav dropdown indicators
		$('#alt-nav .parent').not($(this).parent()).click(function(){
			$(this).toggleClass('parent-up');
		});

		// Set some defaults
		$('#alt-nav-wrap, .wrap2, .sub').transition({ 
    			rotateY: '0deg' // to invoke hardware accel. on iOS6+
    			}, 0);
		$('#alt-nav-wrap').css({ transformOrigin: '0px 0px' });
		$('#alt-nav-wrap').transition({ 
			    scale: '.8',
			    opacity: '0'
			}, 0, 'ease');

		// Open Mobile Nav
		$('.open').fastClick(function(e) {
			$('#alt-nav-wrap').show();
			$('.wrap2').transition({ 
				x: '250px'
    			}, 500, 'ease');
			$('.overlay-close').show();
			$('#alt-nav-wrap').transition({ 
			    scale: '1',
			    opacity: '1'
			}, 300, 'ease')
		});

		//Close Mobile Nav
		$('.close, .overlay-close').fastClick(function(e) {
			$('.wrap2').transition({ x: '0px' }, 500, 'ease');
			$('#alt-nav-wrap').transition({ 
			    scale: '.8',
			    opacity: '0'
			}, 1000, 'ease');
			$('.overlay-close').hide();
		});

		// Mobile Sub Menus
		$(" #alt-nav .parent").click(function(f){
        $(this).find('ul:first').slideToggle();
        f.stopPropagation();
        });

	
	});




