$(document).ready(function(){
	$('.menu li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
});