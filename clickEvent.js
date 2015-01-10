$(document).ready(function() {
    var menu_top = $('.menu').height();
	
	var check = function(name){
		var div_top = $(name).offset().top;
		if(div_top > 100){
			$('body', 'html').animate({scrollTop:div_top-menu_top},'50');
		}
	}
	
	$('.me').click(
		function(){
			check('.about_content');
	});
	
	$('.and').click(
		function(){
			check('.and_content');
	});
	
	$('.web').click(
		function(){
			check('.web_content');
	});
	
	$('.math').click(
		function(){
			check('.math_content');
	});
	
	$('.resu').click(
		function(){
			window.open("resume.pdf");
	});
});