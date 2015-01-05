$(document).ready(function() {
	var class_name = $('.about_content').attr('class');
	var display = $('.about_content');
	var height = $(window).height()*0.3;
	
	var check = function(name){
		var div_top = $(name).offset().top;
		if(div_top > 100){
			$('body', 'html').animate({scrollTop:div_top - height},'50');
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
			window.open("cv_9.pdf");
	});
});