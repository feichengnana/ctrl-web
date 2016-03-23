$(function(){
	setwindowSize();
	$(window).resize(function(){
		setwindowSize();
	})
	
	$('.c-netGuide').hover(function(){
		var left = $(this).offset().left;
		$('.c-netGuide-wrapper').css({'left':left+'px',right:'auto'}).show();
	},function(){
		$('.c-netGuide-wrapper').hide();
	})
	
})


function setwindowSize(){
	if($(window).width()<1200){
		if(!$('body').hasClass('width1000'))
			$('body').addClass('width1000');
	}else{
		if($('body').hasClass('width1000'))
			$('body').removeClass('width1000');
	}
}