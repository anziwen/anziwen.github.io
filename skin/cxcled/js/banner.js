$(function(){
	$('.banner .show ul li:eq(0)').show();
	$(".hot .list div").jCarouselLite({btnNext: "http://www.cxcled.cn/skin/cxcled/js/.hot .list .next",btnPrev: "http://www.szrcled.com/skin/cxcled/js/.hot .list .prev",auto:4500,speed:300,vertical:true,visible:1});
	var speed = 4000,iNum = 0;
	for(i=0;i<$('.banner .show ul li').length;i++){
		if(i==0){
			$('.tab').append('<a href=\"#1\" class=\"on\">1</a>');
			}
		else{
			$('.tab').append('<a href=\"#1\">'+(i+1)+'</a>');
			}
		}
	$('.banner .focus a').bind('mouseover',function(){
			var aIndex = $('.banner .focus a').index(this);
			$('.on').removeClass('on');
			$(this).addClass('on');
			$('.banner .show ul li').fadeOut().eq(aIndex).fadeIn();
			iNum = aIndex;
			})
	var autoPlay = function(){
		iNum++;
		if(iNum == $('.banner .show ul li').length){iNum=0;}
		$('.on').removeClass('on');
		$('.banner .focus  a').eq(iNum).addClass('on');
		$('.banner .show ul li').fadeOut().eq(iNum).fadeIn(1000);		
		};
	var timer = setInterval(autoPlay,speed);
	$('.banner .show,.banner .focus').hover(function(){clearInterval(timer);},function(){timer = setInterval(autoPlay,speed);});
  });//banner轮换效果
	$(".banner .close-btn").bind("click",function(){
		$(".news-show").animate({top:430})
	});
	$(".box_btn").bind("click",function(){
		$(".news-show").animate({top:218});
	
});
