$(function(){	

function tHide(){	
		$('.announcement').animate({height: '50px',opacity: 0.25},2000,function(){				
				$('.announcement').css('margin-top',0);
				$('.announcement').fadeTo('fast',1);
				});	
}

function tShow(){
	$('.announcement').css('margin-top','-50px');	
	$('.announcement').animate({height: '761px'},2000);		
	}	
	

setTimeout(tHide,5000);

$('.announcement').click(function(){	
	var ah=$('.announcement').height();	
	if(ah=='50'){	
	tShow();	
	}
	else{}	
	})
})

function secBoard(elementID,listName,n) {
 var elem = document.getElementById(elementID);
 var elemlist = elem.getElementsByTagName("li");
 for (var i=0; i<elemlist.length; i++) {
  elemlist[i].className = "normal";
  var m = i+1;
  document.getElementById(listName+"_"+m).style.display = "none";
 }
  elemlist[n-1].className = "current";
  document.getElementById(listName+"_"+n).style.display = "block";
}

function secBoard2(elementID,listName,n) {
 var elem = document.getElementById(elementID);
 var elemlist = elem.getElementsByTagName("li");
 for (var i=0; i<elemlist.length; i++) {
  elemlist[i].className = "off";
  var m = i+1;
  document.getElementById(listName+"_"+m).style.display = "none";
 }
  elemlist[n-1].className = "active";
  document.getElementById(listName+"_"+n).style.display = "block";
}
function secBoard3(elementID,listName,n,currentcss,normalcss) {
 var elem = document.getElementById(elementID);
 var elemlist = elem.getElementsByTagName("li");
 for (var i=0; i<elemlist.length; i++) {
  elemlist[i].className = normalcss;
  var m = i+1;
  document.getElementById(listName+"_"+m).style.display = "none";
 }
  elemlist[n-1].className = currentcss;
  document.getElementById(listName+"_"+n).style.display = "block";
}
function showDiv(obj,num,len)
{
	for(var id = 1;id<=len;id++)
	{
	var ss=obj+id;
	var snav =obj+"Series"+id;
	if(id==num)
	{
		try{document.getElementById(ss).style.display="block"}catch(e){};
		try
		{
		//for( i=1, i<len,i++){document.getElementById(snav).className="noactive";}
		document.getElementById(snav).className="over"
		}
		catch(e){};
		}
		else
		{
			try{document.getElementById(ss).style.display="none"}catch(e){};
			try{document.getElementById(snav).className="out"}catch(e){};
		}
	}  
}

function SearchProduct()
{
  var vstr=$("#search_jz").val();
  var vstr1=$("#search_hj").val();
  if (vstr=="0"&&vstr1=="0")
  {
	 alert("请选择搜索条件再进行产品搜索!");
	 return false;
  }
  else
  {
   var url="/aspx/search.aspx?searchby=addfield&columnid=21&keyword="+vstr+"&keyword1="+vstr1
   window.location.href=url;
  }
}


function showDialog(jobid)
{
  var objW=$(window);
  var objC=$(".dialog");
  var brsW=objW.width();
  var brsH=objW.height();
  var sclL=objW.scrollLeft();
  var sclT=objW.scrollTop();
  var curW=objC.width();
  var curH=objC.height();
  var left=sclL+(brsW-curW)/2;
  var top=sclT+(brsH-curH)/2;
  objC.css({"left":left,"top":top});
  $(".dialog").show();
  //$("#jobdetail").load("http://absen.wington.cn/job-"+jobid+".html");
  $.get("/job-"+jobid+".html",function(data){
  $("#jobdetail").html(data);
  });
}
$(window).resize(function(){
if (!$(".dialog").is(":visible")){
return;
}
showDialog();
})

function closedialog()
{
 $(".dialog").hide();
}

function AjaxNextPager(pageindex,wherestr,appid,divid,style)
{
  $("#appslist_"+appid).html("<img src='../../../images/loading.gif'/*tpa=http://www.szrcled.com/images/loading.gif*/ />");
  var formData=$("#appsearchform_"+appid).serialize();
  $("#ac").val("AjaxSearch");
   $.ajax({
   type: "POST",
   url: "/aspx/ajax.aspx?act=appssearch&appid="+appid+"&pageindex="+pageindex,
   processData:true,
   data:formData,
   success: function(data){
   $("#appslist_"+appid).html(data);
  }

   });
  
}

function AjaxSearch()
{
  var appid=$("#appsearch_appid").val();
  $("#appslist_"+appid).html("<img src='../../../images/loading.gif'/*tpa=http://www.szrcled.com/images/loading.gif*/ />");
  var formData=$("#appsearchform_"+appid).serialize();
  $("#ac").val("AjaxSearch");
   $.ajax({
   type: "POST",
   url: "/aspx/ajax.aspx?act=appssearch&appid="+appid+"&pageindex=1",
   processData:true,
   data:formData,
   success: function(data){
   $("#appslist_"+appid).html(data);
  }

   });
}

function AjaxPostform(appid)
 {
    var appid=3;
    var formData=$("#postform3").serialize();
    $("#ac").val("AjaxPostform");
    $.ajax({ 
    type: "POST",
    url:"http://www.szrcled.com/aspx/post.aspx?posttype=userpage&act=postform&frmtb=F58555AF4DBD23C190E2A689B793FB2B4A5AA595DEF20302",
    processData:true,
    data:formData,
    success: function(data){
    if (document.getElementById("appslist_3"))
    {
      var style=$("#hidden_liststyle_3").val();
      var appid=3;
      var contentid=0;
      var columnid=0;
      var style=$("#hidden_liststyle_3").val();
      if (document.getElementById("txtContentid"))
      {
       contentid=$("#txtContentid").val();
      }
      $.post("http://www.szrcled.com/aspx/ajax.aspx",{act:"getappsdata",appid:appid,style:style,recordid:contentid,columnid:columnid},function(data){
      $("#appslist_3").html(data);
      })
    }
   }
})
}

///大事记
$(document).ready(function() {
    if (document.getElementById("absendjs")) {
        
		$("label:not(:first)").removeClass().addClass("jsjia");
		$("label:first").removeClass().addClass("jsjian");
        $("dd:not(:first)").hide();
        $("label").click(function() {
		   if ($(this).attr('class')=="jsjia")
		   {
			
            $("dd:visible").slideUp("slow");
			$("dd:visible").parent().find("label:not(this)").removeClass().addClass("jsjia");
			$(this).parent().next().slideDown("slow");
            $(this).removeClass().addClass("jsjian");
            return false;
		   }
		   else
		   {
				$("dd:visible").slideUp("slow");
				$(this).removeClass().addClass("jsjia");
		   }
		  
        });
    }

})
//研发与制造
//$(document).ready(function() {
   // if (document.getElementById("team")) {
        //$(".tab_nav li:first").addClass("active");
        //$(".tab_nav li:not(:first)").addClass("off");
       // $(".tab_nav li").click(function() {
           // $(this).removeClass();
           // $(this).addClass("active").siblings("li").removeClass().addClass("off");
            //$(".tab_content div:eq(" + $(this).index() + ")").show().siblings("div").hide();
       // });
    //}
//})


///常见问题 问答列表
$(document).ready(function() {
    if (document.getElementById("absendwd")) {
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
// 资质荣誉
$(document).ready(function(){
	if ((document.getElementById("n1")&&document.getElementById("n2")&&document.getElementById("n3"))||document.getElementById("indexprolist")|| document.getElementById("lightingindexprolist")||document.getElementById("contactinfo"))
	{
		
		$("#n1").html($("#listall_0 a").length);
		$("#n2").html($("#listall_1 a").length);
		$("#n3").html($("#listall_2 a").length);
		$("label").click(function(){
								  
								var dex=$("label").index(this);
								if ($(this).attr("class")=="cercurrent")
								{
								   $(this).removeClass().addClass("cernomarl");
								   $("#list4_"+dex).slideUp("slow");
								   $("#listall_"+dex).slideDown("slow");
								}
								else
								{
								   $(this).removeClass().addClass("cercurrent");
								   $("#listall_"+dex).slideUp("slow");
								   $("#list4_"+dex).slideDown("slow");
								  
								}
		    
								$(".Cert img").each(function(){
		  var imgh=$(this).height();
		  if (imgh<210&&imgh>0)
		  {
		    var top=210-(105+(imgh/2))
			$(this).css({"margin-top":top+"px"});
		  }
		})  
								  })				   
						   
	}
						   })
function showbigimg(str)
{
   document.getElementById("bigimg").src=str
}

/* ============================================================
 * Lazy Load - jQuery plugin for lazy loading images
 * Copyright (c) 2007-2009 Mika Tuupola
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 * Version:  1.5.0
 
 ============================================================ */
(function($){$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options);}
var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear");}else{if(counter++>settings.failurelimit){return false;}}});var temp=$.grep(elements,function(element){return!element.loaded;});elements=$(temp);});}
this.each(function(){var self=this;if(undefined==$(self).attr("original")){$(self).attr("original",$(self).attr("src"));}
if("scroll"!=settings.event||undefined==$(self).attr("src")||settings.placeholder==$(self).attr("src")||($.abovethetop(self,settings)||$.leftofbegin(self,settings)||$.belowthefold(self,settings)||$.rightoffold(self,settings))){if(settings.placeholder){$(self).attr("src",settings.placeholder);}else{$(self).removeAttr("src");}
self.loaded=false;}else{self.loaded=true;}
$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))
[settings.effect](settings.effectspeed);self.loaded=true;}).attr("src",$(self).attr("original"));};});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear");}});}});$(settings.container).trigger(settings.event);return this;};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop();}else{var fold=$(settings.container).offset().top+$(settings.container).height();}
return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft();}else{var fold=$(settings.container).offset().left+$(settings.container).width();}
return fold<=$(element).offset().left-settings.threshold;};$.abovethetop=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollTop();}else{var fold=$(settings.container).offset().top;}
return fold>=$(element).offset().top+settings.threshold+$(element).height();};$.leftofbegin=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollLeft();}else{var fold=$(settings.container).offset().left;}
return fold>=$(element).offset().left+settings.threshold+$(element).width();};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"});})(jQuery);

$(function(){
$('.style4_pic img,.newsInfo_content img,.solutionc img,.proimg img,.caseimg img').lazyload({
			effect: "fadeIn",
			placeholder: "../../../images/grey.gif"/*tpa=http://www.szrcled.com/images/grey.gif*/
		});
		   });

(function($){
	var goToTopTime;
	$.fn.goToTop=function(options){
		var opts = $.extend({},$.fn.goToTop.def,options);
		var $window=$(window);
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
		//$(this).hide();
		var $this=$(this);
		clearTimeout(goToTopTime);
		goToTopTime=setTimeout(function(){
			var controlLeft;
			if ($window.width() > opts.pageHeightJg * 2 + opts.pageWidth) {
				controlLeft = ($window.width() - opts.pageWidth) / 2 + opts.pageWidth + opts.pageWidthJg;
			}else{
				controlLeft = $window.width()- opts.pageWidthJg-$this.width();
			}
			var cssfixedsupport=$.browser.msie && parseFloat($.browser.version) < 7;//判断是否ie6
			var controlTop=$window.height() - $this.height()-opts.pageHeightJg;
			controlTop=cssfixedsupport ? $window.scrollTop() + controlTop : controlTop;
			var shouldvisible=( $window.scrollTop() >= opts.startline )? true : false;
			
			if (shouldvisible){
				$this.stop().show();
			}else{
				$this.stop().hide();
			}
			
			$this.css({
				position: cssfixedsupport ? 'absolute' : 'fixed',
				top: controlTop,
				left: controlLeft
			});
		},30);
		
		$(this).click(function(event){
			$body.stop().animate( { scrollTop: $(opts.targetObg).offset().top}, opts.duration);
			$(this).blur();
			event.preventDefault();
			event.stopPropagation();
		});
	};
	
	$.fn.goToTop.def={
		pageWidth:1000,//页面宽度
		pageWidthJg:5,//按钮和页面的间隔距离
		pageHeightJg:10,//按钮和页面底部的间隔距离
		startline:30,//出现回到顶部按钮的滚动条scrollTop距离
		duration:200,//回到顶部的速度时间
		targetObg:"body"//目标位置
	};
})(jQuery);
$(function(){
    if (document.getElementById("gototop"))
	{
	$('<a href="javascript:;" class="backToTop"></a>').appendTo("body");
	}
});
//调用返回顶部
$(function(){
    if (document.getElementById("gototop"))
	{
	   $(".backToTop").goToTop({});
	   $(window).bind('scroll resize',function(){
	    $(".backToTop").goToTop({});
	   });
	}
});

//播放视频
function showVideoPay(videoid, url) {
    $.post("http://www.szrcled.com/aspx/playvideo.aspx", { videoid: videoid, videiurl: url }, function(data) {
        if (data != "") {
           $.fancybox(data, 
           {
 
             "padding" : 0,
              "autoDimensions" : false,
               "width" : 680,
               "height" : 600,
               "hideOnOverlayClick": false,
               "enableEscapeButton": false
            })
        }
    })
}
function getmapshtml(mapstr) {

    $.post("http://www.szrcled.com/aspx/maps.aspx", { maptype: mapstr }, function(data) {
        if (data != "") {
            //$("#mapinit").html(data);
            $.fancybox(data,
           {

               "padding": 0,
               "autoDimensions": false,
               "width": 680,
               "height": 600,
               "hideOnOverlayClick": false,
               "enableEscapeButton": false
           })
        }
    })
}
$(function(){
    if (document.getElementById("slideshow"))
	{
	    $('#slideshow').cycle({
          fx:     'fade',
          speed:  'fast',
          timeout: 3000,
          pager:  '#ifocus_btn',
          pagerAnchorBuilder: function(idx, slide) {
            return '<li><a href="#"><img src="' + slide.src + '" width="101" height="36" /></a></li>';
        }
       });
	}
	if (document.getElementById("cycle_ad"))
	{
		$(' .product_cycle_ad').after('<div class="indexadctrl">').cycle({
		fx: 'fade',
		speed: 500,
		timeout: 3000,
		pager:   " .indexadctrl",
		pagerEvent: 'mouseover',
		pause:1,
		pauseOnPagerHover: 1
	});   
		
	}
	if (document.getElementById("ledbox"))
	{
	   $(' .led_cycle_ad').cycle({
		fx: 'fade',
		speed: 500,
		timeout: 3000,
		//pager:   " .indexadctrl",
		pagerEvent: 'mouseover',
		pause:1,
		pauseOnPagerHover: 1
	});   
	}
	if (document.getElementById("lightbox"))
	{
	   $(' .lighting_cycle_ad').cycle({
		fx: 'fade',
		speed: 500,
		timeout: 3000,
		//pager:   " .indexadctrl",
		pagerEvent: 'mouseover',
		pause:1,
		pauseOnPagerHover: 1
	});   
	}
});

$(function() {

    $(".newsList .style1:even").css("background", "#F7F4EF");
    $(".newsList .style1:odd").css("background", "#FFFFFF");
    var urlpath = window.location.pathname;
    var dex = 0;
    var attrid = 0;
    var attrdex = 0;
    var attrid1 = 0;
    var attrdex1 = 0;
    var attrid2 = 0;
    var attrdex2 = 0;
    if (document.getElementById("hid_columnid")) {
        var lmid = $("#hid_columnid").val();
        $("#columnid_" + lmid).addClass("pitemcurrent");
        var urlarr = urlpath.split("--")[1];
        if (urlarr != undefined) {
            var urlarr2 = urlarr.split("-");
            if (urlarr2.length == 5) {
                columnid = urlarr.split("-")[0];
                attrid = urlarr.split("-")[1];
                attrdex = urlarr.split("-")[2];
                attrid1 = urlarr.split("-")[3];
                attrdex1 = urlarr.split("-")[4].split(".")[0];
            }
            if (urlarr2.length == 7) {
                columnid = urlarr.split("-")[0];
                attrid = urlarr.split("-")[1];
                attrdex = urlarr.split("-")[2];
                attrid1 = urlarr.split("-")[3];
                attrdex1 = urlarr.split("-")[4];
                attrid2 = urlarr.split("-")[5];
                attrdex2 = urlarr.split("-")[6].split(".")[0];
            }

            $("#attr_" + attrid + "_" + attrdex).addClass("pitemcurrent");
            $("#attr_" + attrid1 + "_" + attrdex1).addClass("pitemcurrent");
            $("#attr_" + attrid2 + "_" + attrdex2).addClass("pitemcurrent");
            if (document.getElementById("yingyonglingyu_case")) {
                if (columnid > 0) {
                    $("#yingyonglingyu_case").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('case','yy')\">全部 >></a></li></ul>");
                }
            }
            if (document.getElementById("xiangsu_case")) {
                if (attrid * 1 > 0) {
                    $("#xiangsu_case").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('case','xs')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex * 1 - 1;
                    var tempstr = $("#xiangsu_case li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("anliquyu_case")) {
                if (attrid1 * 1 > 0) {
                    $("#anliquyu_case").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('case','qy')\">全部 >></a></li></ul>");
                    var tempdex = attrdex1 * 1 - 1;
                    var tempstr = $("#anliquyu_case li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("yingyong_product")) {
                if (columnid * 1 > 0) {
                    $("#yingyong_product").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('product','yy')\">全部 >></a></li></ul>");
                    //var tempstr = $("#yingyong_product li:eq(" + attrdex + ") a").html();
                    // $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("xiansu_product")) {
                if (attrid * 1 > 0) {
                    $("#xiansu_product").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('product','xs')\">全部 >></a></li></ul>");
                    var tempdex = attrdex * 1 - 1;
                    var tempstr = $("#xiansu_product li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }

            if (document.getElementById("power_zmproduct")) {
                if (attrid * 1 > 0) {
                    $("#power_zmproduct").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('zmproduct','power')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex * 1 - 1;
                    var tempstr = $("#power_zmproduct li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("yingyong_zmproduct")) {
                if (attrid1 * 1 > 0) {
                    $("#yingyong_zmproduct").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('zmproduct','yych')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex1 * 1 - 1;
                    var tempstr = $("#yingyong_zmproduct li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("power_zmcase")) {
                if (attrid * 1 > 0) {
                    $("#power_zmcase").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('zmcase','power')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex * 1 - 1;
                    var tempstr = $("#power_zmcase li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("yingyong_zmcase")) {
                if (attrid1 * 1 > 0) {
                    $("#yingyong_zmcase").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('zmcase','yych')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex1 * 1 - 1;
                    var tempstr = $("#yingyong_zmcase li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
            if (document.getElementById("anliquyu_zmcase")) {
                if (attrid2 * 1 > 0) {
                    $("#anliquyu_zmcase").after("<ul><li><a href=\"javascript:void(0)\" style=\"color:#f60\" onclick=\"clearsearattrs('zmcase','quyu')\">全部 >></a></></li></ul>");
                    var tempdex = attrdex2 * 1 - 1;
                    var tempstr = $("#anliquyu_zmcase li:eq(" + tempdex + ") a").html();
                    $(".prolisttop").append("<span>" + tempstr + "</span>");
                }
            }
        }
        else {
            if (document.getElementById("hid_columnid")) {
                var columnid = $("#hid_columnid").val();
                $("#columnid_" + columnid).addClass("pitemcurrent");
            }
            else {
                $(".fliteritem a").each(function() {
                    var href = $(this).attr("name");
                    if (urlpath == href) {
                        dex = $(".fliteritem a").index(this);
                    }
                })
                $(".fliteritem li:eq(" + dex + ")").addClass("pitemcurrent");
            }
        }
    }

})
function clearsearattrs(ptype, paramtype) {
   
    var attrid1 = 0, attrdex1 = 0;
    var attrid2 = 0;
    var attrdex2 = 0;
    var attrid3 = 0
    var attrdex3 = 0;
    var categoryid = 0;
    var url = "";
    if (document.getElementById("hid_attrid")) {
        attrid1 = $("#hid_attrid").val();
        attrdex1 = $("#hid_attrdex").val();
    }
    if (document.getElementById("hid_attrid1")) {
        attrid2 = $("#hid_attrid1").val();
        attrdex2 = $("#hid_attrdex1").val();
    }
    if (document.getElementById("hid_columnid")) {
        categoryid = $("#hid_columnid").val();
    }
    if (paramtype == "yy") {
        url = "/aspx/search.aspx?searchby=addfield&columnid=0&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
    }
    if (paramtype == "xs") {
        attrid1 = 0;
        attrdex1 = 0;
        url = "/aspx/search.aspx?searchby=addfield&columnid="+categoryid+"&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
    }
    if (paramtype == "qy") {
        attrid2 = 0;
        attrdex2 = 0;
        url = "/aspx/search.aspx?searchby=addfield&columnid="+categoryid+"&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
    }
    if (ptype == "zmproduct") {
        if (paramtype == "power") {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            attrid1 = 0;
            attrdex1 = 0;
            url = "/aspx/search.aspx?searchby=addfield&columnid="+categoryid+"&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
        }
        if (paramtype == "yych") {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            var attrid2 = 0;
            var attrdex2 = 0;
            url = "/aspx/search.aspx?searchby=addfield&columnid="+categoryid+"&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
        }
    }
    if (ptype == "zmcase") {
        if (paramtype == "power") {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            if (document.getElementById("hid_attrid2")) {
                attrid3 = $("#hid_attrid2").val();
                attrdex3 = $("#hid_attrdex2").val();
            }
            attrid1 = 0;
            attrdex1 = 0;
            url = "/aspx/search.aspx?searchby=addfield&columnid=" + categoryid + "&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&attrid2=" + attrid3 + "&attrdex2=" + attrdex3 + "&ptype=" + ptype;
        }
        if (paramtype == "yych") {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            if (document.getElementById("hid_attrid2")) {
                attrid3 = $("#hid_attrid2").val();
                attrdex3 = $("#hid_attrdex2").val();
            }
            var attrid2 = 0;
            var attrdex2 = 0;
            url = "/aspx/search.aspx?searchby=addfield&columnid=" + categoryid + "&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&attrid2=" + attrid3 + "&attrdex2=" + attrdex3 + "&ptype=" + ptype;
        }
        if (paramtype == "quyu") {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            var attrid3 = 0;
            var attrdex3 = 0;
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            url = "/aspx/search.aspx?searchby=addfield&columnid=" + categoryid + "&keyword=&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&attrid2=" + attrid3 + "&attrdex2=" + attrdex3 + "&ptype=" + ptype;
        }
    }
    window.location = url;
}
function SearchByAttr(columnid, attrid, dex, keyword, ptype,paramdex) {
    var categoryid = columnid;
    if (paramdex > 0) {
        if (document.getElementById("hid_columnid")) {
            categoryid = $("#hid_columnid").val();
        }
    }
    var url = "";
    var attrid1 = 0;
    var attrdex1 = 0;
    var attrid2 = 0;
    var attrdex2 = 0;
    var attrid3 = 0;
    var attrdex3 = 0;
    if (ptype == "case") {

        if (paramdex == 0) {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
        }
        if (paramdex == 1) {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            attrid1 = attrid;
            attrdex1 = dex;
        }
        if (paramdex == 2) {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            attrid2 = attrid;
            attrdex2 = dex;
        }

    }
    if (ptype == "product") {
        if (paramdex == 0) {
            if (document.getElementById("hid_attrid1")) {
                attrid1 = $("#hid_attrid1").val();
                attrdex1 = $("#hid_attrdex1").val();
            }
        }
        if (paramdex == 1) {
            attrid1 = attrid;
            attrdex1 = dex;
        }
    }
    if (ptype == "zmproduct") {
        if (paramdex == 0) {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
        }
        if (paramdex == 1) {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            attrid1 = attrid;
            attrdex1 = dex;
        }
        if (paramdex == 2) {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            attrid2 = attrid;
            attrdex2 = dex;
        }
    }
    if (ptype == "zmcase") {
        if (paramdex == 0) {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            if (document.getElementById("hid_attrid2")) {
                attrid3 = $("#hid_attrid2").val();
                attrdex3 = $("#hid_attrdex2").val();
            }
        }
        if (paramdex == 1) {
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            if (document.getElementById("hid_attrid2")) {
                attrid3 = $("#hid_attrid2").val();
                attrdex3 = $("#hid_attrdex2").val();
            }
            attrid1 = attrid;
            attrdex1 = dex;
        }
        if (paramdex == 2) {
            if (document.getElementById("hid_attrid2")) {
                attrid3 = $("#hid_attrid2").val();
                attrdex3 = $("#hid_attrdex2").val();
            }
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            attrid2 = attrid;
            attrdex2 = dex;
        }
        if (paramdex == 3) {
            if (document.getElementById("hid_attrid")) {
                attrid1 = $("#hid_attrid").val();
                attrdex1 = $("#hid_attrdex").val();
            }
            if (document.getElementById("hid_attrid1")) {
                attrid2 = $("#hid_attrid1").val();
                attrdex2 = $("#hid_attrdex1").val();
            }
            attrid3 = attrid;
            attrdex3 = dex;
        }
    }
    //var s=href=\"/aspx/search.aspx?searchby=addfield&columnid=" + columnid + "&keyword=" + System.Web.HttpContext.Current.Server.UrlEncode(dr2["FieldValue"].ToString().Trim()) + "\"
    url = "/aspx/search.aspx?searchby=addfield&columnid=" + categoryid + "&keyword=" + keyword + "&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&ptype=" + ptype;
    if (ptype == "zmcase") {
        url = "/aspx/search.aspx?searchby=addfield&columnid=" + categoryid + "&keyword=" + keyword + "&attrid=" + attrid1 + "&attrdex=" + attrdex1 + "&attrid1=" + attrid2 + "&attrdex1=" + attrdex2 + "&attrid2=" + attrid3 + "&attrdex2=" + attrdex3 + "&ptype=" + ptype;
    }
    //alert(url);
	    window.location = url;
	}
	
	
function checktosearch()
{
   if ($("#keyword").val()=="")
   {
	  alert("请输入搜索关键词!");
	  return false;
   }
   return true;

}

function gothisurl(vstr) {
    if (vstr == "") {
        return;
    }
    window.top.location.href = vstr;
}

function GetAreaOptions(selectid, tabstr, id, parentid,dtype) {
    var indexshow = "全部"
    if (tabstr == "province") {
        indexshow = "省份"
        parentid = "0,";
    }
    if (tabstr == "city") {
        indexshow = "城市"
       
    }
    if (tabstr == "district") {
        indexshow = "区县"
    }
    if (parentid.indexOf(",") != -1) {
        parentid = parentid.split(",")[0];
    }
    $.post("http://www.szrcled.com/aspx/ajax.aspx", { act: "getcity", tabstr: tabstr, parentid: parentid, dtype: dtype }, function(data) {
        if (data != "") {

            document.getElementById(selectid).options.length = 0;
            var arr1 = new Array();
            if (data.indexOf("|") != -1) {
                arr1 = data.split("|");
            }
            else {
                arr1[0] = data;
            }
            var opt2 = document.createElement("OPTION");
            opt2.text = indexshow;
            opt2.value = "0";
            document.getElementById(selectid).options.add(opt2);
            for (var dex = 1; dex < arr1.length; dex++) {
                if (arr1[dex] != "") {
                    var arr2 = arr1[dex].split(",");
                    var opt = document.createElement("OPTION");
                    opt.text = arr2[1];
                    opt.value = arr2[0];
                    if (id == arr2[0]) {
                        opt.selected = true;
                    }
                    document.getElementById(selectid).options.add(opt);

                }
            }
            if (dtype == "hb") {
                GetWdHuoban("hb");
            }
            if (dtype == "wd") {
                
                GetWdHuoban("wd");
            }
        }

    })
}

$(function() {

    if (document.getElementById("wangdian_list")) {
        if (document.getElementById("selprovince")) {
            GetAreaOptions("selprovince", "province", 0, 0, "wd");
        }
        //var provinceid = $("#selprovince").val();
        //var cityid = $("#selcity").val();
        //GetWdHuoban("wd", "wangdian_list", provinceid, cityid);
    }
    if (document.getElementById("huoban_list")) {
        if (document.getElementById("selprovince")) {
            GetAreaOptions("selprovince", "province", 0, 0, "hb");
        }
        //var provinceid = $("#selprovince").val();
        //var cityid = $("#selcity").val();
        //GetWdHuoban("hb", "huoban_list", provinceid, cityid);
    }
})

function GetWdHuoban(dtype) {
    var provinceid = $("#selprovince").val();
    var cityid = $("#selcity").val();
    var elementid = "";
    var paramstr = "";
    if (dtype == "hb") {
        elementid = "huoban_list";
        paramstr = "gethuoban";
    }
    if (dtype == "wd") {
        elementid = "wangdian_list";
        paramstr = "getwangdian";
    }
    $("#" + elementid).html("正在加载数据,请稍候....");
    $.post("http://www.szrcled.com/aspx/ajax.aspx", { act: paramstr, provinceid: provinceid, cityid: cityid }, function(data) {
        if (data != "") {
            $("#" + elementid).html(data);
        }
        else {
            $("#" + elementid).html("没有找到相关数据!");
        }
    })
}

$(document).ready(function() {
$(".baidumaps").fancybox({
        maxWidth: 697,
        maxHeight: 550,
        fitToView: false,
        width: 697,
        height: 550,
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

$(function() {
    $(".proList").each(function() {
        if ($(this).children(" .probox").length < 4) {
            var dex = $(".proList").index(this);
            $(".promore:eq(" + dex + ")").hide();
        }
    })
    $(".caseList").each(function() {
        if ($(this).children(".casebox").length < 4) {
            var dex = $(".caseList").index(this);
            $(".promore:eq(" + dex + ")").hide();

        }

    })
})

$(function(){
		  
		   if ($("embed").length>0)
		   {
			   $("embed").before("<a name=productvideo></a>");
			   $("#pvideologo").show();
		   }
		   
         if (document.getElementById("localvideo"))
		 {
		   if ($("embed").length>0)
		   {
			  $("#netvideo").show();
		   }
		   else
		   {
			   $("#localvideo").show();
		   }
			 
		 }
		   })