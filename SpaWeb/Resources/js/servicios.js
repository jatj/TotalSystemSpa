$(function(){
	function resizeItems(){
		var gridBigW = $('.grid_item_big').width()*0.75;
		$('.grid_item_big').css({
		    'height': gridBigW + 'px'
		});
		var gridSmallW = $('.grid_item_small').width()*1.25;
		$('.grid_item_small').css({
		    'height': gridSmallW + 'px'
		});
	}
	function centerText(){
		$.each($('.grid_text'),function(){
			var textW = $(this).width()/2;
			var textH = $(this).height()/2;
			$(this).css({
			    'top': 'calc(50% - '+textH+'px)',
			    'left': 'calc(50% - '+textW+'px)'
			});
		});
		
	}
	centerText();
	resizeItems();
	$( window ).resize(function() {
	  	resizeItems();
	  	centerText();
	});
});