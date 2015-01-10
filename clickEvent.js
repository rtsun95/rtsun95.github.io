$(document).ready(function() {
	var height = $(window).height()*0.05;
	
	var check = function(name){
		var div_top = $(name).offset().top;
		if(div_top > 100){
			$('body', 'html').animate({scrollTop:div_top-height},'50');
			console.log(height,div_top);
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