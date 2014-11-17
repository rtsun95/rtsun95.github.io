$(document).ready(function() {
    var menu_top = $('.menu').height();
	if($(document).width()>768){
		var container_top = $('.container').offset().top;
		var title_top = $('.main').offset().top;
		var invisible = false;
		var menu = function(){
			var scroll_top = $(window).scrollTop();
			if ((scroll_top /(container_top - menu_top)) > 0.75) { 
				$('.menu').css('opacity','0');
				invisible = true;
			} else {
				$('.menu').css('opacity','0.75');
				invisible=false;
			}   
		};
	}
	
	var title = function(){
        var scroll_top = $(window).scrollTop();
		console.log('scroll_top = '+scroll_top + ' difference = ' + (menu_top-container_top-100));
        if ((scroll_top /(title_top - menu_top) >  0.75)) { 
            $('.main').fadeOut(200);
        } else {
            $('.main').fadeIn(); 
        }   
    };
	title();
    menu();
	$(window).scroll(function() {
		title();
        menu();
    });
	
	
	
	$('.menu').mouseenter(
	function(){
		$('.menu').css('opacity','1');
	});
	$('.menu').mouseleave(
	function(){
		if(invisible == true){
			$('.menu').css('opacity','0');
		}
		else{
			$('.menu').css('opacity','0.75');
		}
	});
})