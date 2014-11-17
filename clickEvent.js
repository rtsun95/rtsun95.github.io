$(document).ready(function() {
	var class_name = $('.about_content').attr('class');
	var display = $('.about_content');
	
	var check = function(name){
		var container_top = $('.container').offset().top;
		if(class_name != $(name).attr('class')){
				display.css('opacity','0');
				$(name).css('opacity', '0.9');
				class_name=$(name).attr('class');
				display = $(name);
			}
		if(container_top > 100){
			$('body', 'html').animate({scrollTop:container_top - 100},'50');
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
			check('.resu_content');
	});
});