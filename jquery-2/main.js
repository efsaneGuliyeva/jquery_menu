$(document).ready(
	function(){
		$('.text').click(function(){
			//var text = $('p').text();
			//alert(text);
			$('p').text("Javascript");
		});

		$('.html').click(function(){
			//var html = $('p').html();
			//alert(html);
			$('p').html("<i>Test</i>");

		});

		$('.value').click(function(){
			//var value = $('input').val();
			//alert(value);
			$('input').val("username");

		});

		var clicked = false;
		$('.pwd-btn').click(function(){
			if (!clicked) 
			{
				$('#pwd').attr('type', 'text');
				$(this).text('Parolu gizlet');
				clicked = true;
			}
			else {
				$('#pwd').attr('type', 'password');
				$(this).text('Parolu goster');
				clicked = false;
			}
			
		});
}
);