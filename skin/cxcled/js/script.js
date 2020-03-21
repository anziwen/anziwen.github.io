// JavaScript Document

$(function(){
	$('.newslist li:even').addClass('li1');
	
  $('.ab_2 ul li').each(function(i){
		var t = i+1;
		$(this).click(function(){
			$("div.ab_2 ul li[id=t"+t+"]").find('a').addClass('hover');
			$("div.ab_2 ul li[id!=t"+t+"]").find('a').removeClass('hover');
			$('#show'+t).show();
			$('div#tez>div[id!=show'+t+']').hide();
			}) 
	  }) 
	   
	  
 })	  
 
 
 
 ///常见问题 问答列表
$(document).ready(function() {
    if (document.getElementById("wd")) {
		$("label:not(:first)").removeClass().addClass("rjia");
		$("label:first").removeClass().addClass("rjian");
        $("dd:not(:first)").hide();
        $("label").click(function() {
			if ($(this).attr("class")=="rjia")
			{
              $("dd:visible").slideUp("slow");
              $("dd:visible").parent().find("label:not(this)").removeClass().addClass("rjia");
              $(this).removeClass().addClass("rjian");
              $(this).parent().next().slideDown("slow");
              return false;
			}
			else
			{
				$("dd:visible").slideUp("slow");
				$(this).removeClass().addClass("rjia");
				
			}
        });
    }

})



//图片简单切换调用语句 图片淡入淡出插件 imgtransition({speed: 3000, animate: 1000}); 
$.fn.imgtransition = function(o){
	var defaults = {
		speed : 5000,
		animate : 1000

	};

	o = $.extend(defaults, o);
	return this.each(function(){
		var arr_e = $("li", this);
		arr_e.css({position: "absolute"});
		arr_e.parent().css({margin: "0", padding: "0", "list-style": "none", overflow: "hidden"});
		function shownext(){
			var active = arr_e.filter(".active").length ? arr_e.filter(".active") : arr_e.first();
			var next =  active.next().length ? active.next() : arr_e.first();

			active.css({"z-index": 9});
			next.css({opacity: 0.0, "z-index": 10}).addClass('active').animate({opacity: 1.0}, o.animate, function(){
				active.removeClass('active').css({"z-index": 8});

			});
		}
		arr_e.first().css({"z-index": 9});
		setInterval(function(){

			shownext();

		},o.speed);

	});

};
 