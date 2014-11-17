$(document).ready(function() {
    var menu_top = $('.menu').height();
    var container_top = $('.container').offset().top;
    var title_top = $('.main').offset().top;
    var invisible = false;
    if ($(window).width() > 768) {
        var menu = function() {
            var scroll_top = $(window).scrollTop();
            if ((scroll_top / (container_top - menu_top)) > 0.75) {
                $('.menu').css('opacity', '0');
                invisible = true;
            } else {
                $('.menu').css('opacity', '0.75');
                invisible = false;
            }
        }
        $('.menu')
            .mouseenter(
                function() {
                    $('.menu').css('opacity', '1');
                });
        $('.menu')
            .mouseleave(
                function() {
                    if (invisible == true) {
                        $('.menu').css('opacity', '0');
                    } else {
                        $('.menu').css('opacity', '0.75');
                    }
                });


        menu();

        $(window).scroll(function() {
            title();
            menu();
        });

    }



    var title = function() {
        var scroll_top = $(window).scrollTop();
        if ((scroll_top / (title_top - menu_top) > 2.5)) {
            $('.main').fadeOut(200);
        } else {
            $('.main').fadeIn();
        }
		
		$('.main').css({
			'top' : title_top+($(this).scrollTop()/1.6)+"px"
  		}); 
		console.log("top = "+$('.main').offset().top);
		console.log("scroll_top = "+scroll_top);
		console.log("difference = "+ (title_top - menu_top));
    };
	
    title();
	 
    $(window).scroll(function() {
        title();
    });
	
	
})