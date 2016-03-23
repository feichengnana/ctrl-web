

$(function(){
	//设置子菜单的显示
	$('.c-nav .ul-inline').hover(function(){
		$('.c-subnav').show();
	},function(e){
		var yy = e.pageY; 
		if(yy<40 || yy>390){
			$('.c-subnav').hide();
			$('.c-nav-item').removeClass('hover');
			$('.c-nav-item .icon-jiantoushang').hide();
		}
	})
	$('.c-subnav').hover(function(){},function(e){
		$(this).hide();
		$('.c-nav-item').removeClass('hover');
		$('.c-nav-item .icon-jiantoushang').hide();
	})
	$('.c-nav .ul-inline li').hover(function(){
		$('.c-nav-item').removeClass('hover');
		$('.c-nav-item').find('.icon-jiantoushang').hide();
		$(this).addClass('hover').find('.icon-jiantoushang').show();
		var crnIndex = $(this).index()/2;
		if(crnIndex>0 && crnIndex<5){
			$('.c-subnav-item:eq('+(4-crnIndex)+')').addClass('hover').siblings().removeClass('hover');
		}else{
			$('.c-subnav-item').removeClass('hover');
		}
	})
	
	$('.c-case-item').hover(function(){
		$(this).addClass('.case-item-hover');
	},function(){
		$(this).removeClass('.case-item-hover');
	})
	
	$('.c-netGuide').hover(function(){
		var left = $(this).offset().left;
		$('.c-netGuide-wrapper').css({'left':left+'px',right:'auto'}).show();
	},function(){
		$('.c-netGuide-wrapper').hide();
	})
	
	$('.c-subnav-item').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var crnIndex = $(this).index();
		$('.c-nav-item .icon-jiantoushang').hide();
		$('.c-nav-item').removeClass('hover');
		$('.c-nav .ul-inline li:eq('+(4-crnIndex)*2+')').addClass('hover').find('.icon-jiantoushang').show();
	})
	
	$(".c-swiper").flexslider({
		slideshowSpeed: 8000, //展示时间间隔ms
		slideDirection: "vertical",//"horizontal" or "vertical"图片设置为滑动式时的滑动方向：左右或者上下
		animationSpeed: 400, //滚动时间ms 
		directionNav: true,//是否显示左右控制按钮
		touch: true //是否支持触屏滑动
		
	});
	
	//设置搜索下拉框的控制
    $('.c-search-select').click(function(event){
    	event.stopPropagation();
    	$(this).next('.c-search-select-sub').show('50');
    })
    $('.c-search-select-sub li').click(function(event){
    	event.stopPropagation();
    	var me = $(this),pnode = me.parent('.c-search-select-sub'),value = me.text(),
    		showDom = $('.c-search-select').find('span'),formDom = $('.c-search-select').find('#searchType');
    	showDom.text(value);
    	formDom.attr('value',value);
    	pnode.hide();
    })
    
	$(document).click(function(){
		$('.c-search-select-sub').hide();
	})
    
	$('.c-mark-title').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index  = $(this).index();
		$('.c-mark-item').hide();
		$('.c-mark-item:eq('+index+')').fadeIn('50');
	},function(){
		
	})
	
	initService();
	setwindowSize();
	$(window).resize(function(){
		setwindowSize();
	})
	
	
	$('.cxscroll').cxScroll();
	$('.c-solution-lb').hover(function(){
		var me = $(this);
		me.children('div').addClass('animated flipInX');
		setTimeout(function(){
	       me.children('div').removeClass('animated flipInX');
	    }, 1000);
	    $(me.attr('data-id')).addClass('active3').siblings().removeClass('active3');
	},function(){
		 $(this).children('div').removeClass('animated flipInX');
	})
	/*
	$('.c-connect-title').hover(function(){
		$('.c-connect-cnt:animated').stop(false);
		$('.c-connect-cnt:visible').hide();
		$(this).next('.c-connect-cnt').fadeIn('200');
	},function(){
		$('.c-connect-cnt:animated').stop(false);
		$('.c-connect-cnt:visible').hide();
	})
	*/
	
	$("#c_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#c_rmenu").data("expanded",true);
		}else{
			$("#c_rmenu").data("expanded",false);
		}
		if($("#c_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#c_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#c_rmenu .btn-top").slideDown();
			}else{
				$("#c_rmenu .btn-top").slideUp();
			}
		}
	});
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
function initService(){
	var baseWidth = 235,cntWidth = 257;
    if($(window).width()<1200){
    	baseWidth = 187.5;
    	cntWidth = 250;
    }
	$('.c-service-item').each(function(index,iDom){
		if(index != 0){
			$(this).css('left',(baseWidth*index+cntWidth)+'px');
		}
	})
	
	$('.c-service-item').hover(function(){
		var crnIndex = $(this).index();
		$('.c-service-item:animated').stop();
		$(this).addClass('active1').siblings().removeClass('active1');
		$('.c-service-item').each(function(index,td){
			var crnLeft = parseInt($(td).css('left').replace('px',''));
			if(index <= crnIndex){
			   targetLeft = baseWidth*index;
			   if(crnLeft != targetLeft)
			   $(td).animate({left:targetLeft+'px'},500);
			}else{
			   targetLeft = baseWidth*index+cntWidth;
			   if(crnLeft != targetLeft)
			   $(td).animate({left:targetLeft+'px'},500);
			}
		})
		
	})
}
