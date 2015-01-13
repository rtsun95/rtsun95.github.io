$(document).ready(function() {
    var menu_top = $('.menu').height();
    var container_top = $('.container').offset().top;
    var title_top = $('.main').offset().top;
    var screen_height = $(window).height() * 0.4;
    if ($(window).width() > 768) {
		$('.container').css({
        	'height': 1.3 * $('.content').height() + "px"
    	});
        $(window).unload(function() {
            $('.main').css({
                'top': screen_height - menu_top - ($(window).scrollTop() / 2.5) + "px"
            });
        });
        var menu = function() {
            var scroll_top = $(window).scrollTop();
            if ((scroll_top / (container_top - menu_top)) > 0.9) {
                $('.menu').css('opacity', '0');
                invisible = true;
            } else {
                $('.menu').css('opacity', '0.75');
                invisible = false;
            }
        }
        $('.menu').mouseover(
            function() {
                $('.menu').css('opacity', '1');
            });
        $('.menu').mouseleave(
            function() {
                if (invisible == true) {
                    $('.menu').css('opacity', '0');
                } else {
                    $('.menu').css('opacity', '0.75');
                }
            });
        menu();
        $(window).scroll(function() {
            menu();
        });
        var title = function() {
            $('.main').css({
                'opacity': 1 - ($(this).scrollTop() / (screen_height + $(this).height() * 0.45))
            });
            $('.main').css({
                'top': screen_height - menu_top - ($(window).scrollTop() / 2.5) + "px"
            });
        };
        title();
    }
	
	
	else{
		$('.container').css({
        	'height': 1.2 * $('.content').height() + "px"
    	});
		$(window).unload(function() {
			$('.main').css({
				'top': screen_height - ($(window).scrollTop() / 2.5) + "px"
			});
		});
		var title = function() {
			$('.main').css({
				'opacity': 1 - ($(this).scrollTop() / (screen_height + $(this).height() * 0.45))
			});
			$('.main').css({
				'top': screen_height - ($(window).scrollTop() / 2.5) + "px"
			});
		};
		title();
	}
	
	
    $(window).scroll(function() {
        title();
    })
})