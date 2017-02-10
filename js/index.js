//轮播图
window.onload=function(){
	var mySwiper = new Swiper('.swiper-container',{
	pagination:".pagination",
//	paginationClickable: true,
    loop: true,
    loopAdditionalSlides : 0,
	autoplay:2000, //自动播放
	autoplayDisableOnInteraction : false,
});  
//console.log(mySwiper.activeIndex);
setTimeout(function(){
	if(mySwiper.slides[2].isActive()){
		$("#slide2_shade").animate({
			width:"50%",
		},1000)
//		$("#slide2_box").animate({
//			left:"600px",
//		},1000)
	}
},2000)
}


//服务范围

//dl背景图
$(".line1_shade").each(function(index,ele){
	$(ele).css({
		backgroundImage:"url(img/bg"+(index+1)+".png)",
	})
})


$(".dd1").each(function(index,ele){
	$(ele).on("mouseenter",function(){
		$(".line1_shade").eq(index).stop(true).animate({
			opacity:"1",
		},500)
		
	})
})

$(".dd1").each(function(index,ele){
	$(ele).on("mouseleave",function(){
		$(".line1_shade").eq(index).stop(true).animate({
			opacity:0,
		},500)
	})
})
var datainfo = 1;
//点击上下切换
$("#solution_left").on("click",function(){
	datainfo--;
	if(datainfo<=0){
		datainfo=4;
		$("#line"+(datainfo)+"").stop(true).fadeIn(1000);
		$("#line"+(1)+"").stop(true).fadeOut(1000);
	}else{
		$("#line"+(datainfo)+"").stop(true).fadeIn(1000);
		$("#line"+(datainfo+1)+"").stop(true).fadeOut(1000);
	}
	
});
$("#solution_right").on("click",function(){
	datainfo++;
	if(datainfo>=5){
		datainfo=1;
		$("#line"+(datainfo)+"").stop(true).fadeIn(1000);
		$("#line"+(5-1)+"").stop(true).fadeOut(1000);
	}else{
		$("#line"+(datainfo)+"").stop(true).fadeIn(1000);
		$("#line"+(datainfo-1)+"").stop(true).fadeOut(1000);
	}
	
});
//背景图片
$(".wall_img").each(function(index,ele){
	$(ele).css({
		background:"url(img/nimg45_"+(index+1)+".png)"
	});
})


var lock = false;
var speedYear =0;  //开发经验
var speedLi = 155; //案例
var speedMu = 0; //项目
var speedMi = 140; //免费
window.addEventListener("DOMMouseScroll",function(){
	var  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if($("body").scrollTop()>=580&&$("body").scrollTop()<=910){
		if(lock ==false){
		var timerYear=setInterval(function(){
			speedYear++;
			speedLi+=3;
			speedMu++;
			speedMi+=3;
			if(speedYear>=6){
				speedYear=6;
				lock=true;
			}
			if(speedLi>=245){
				speedLi=245;
				clearInterval(timerYear);
				lock=true;
			}
			if(speedMu>=5){
				speedMu=5;
				lock=true;
			}
			if(speedMi>=198){
				speedMi=198;
				lock=true;
			}
			lock=false;
//			console.log($(".wall_text").eq(0).html())
			$(".wall_text").eq(0).html(speedYear);
			$(".wall_text").eq(1).html(speedLi);
			$(".wall_text").eq(2).html(speedMu);
			$(".wall_text").eq(3).html(speedMi);
			
		},150)
		}
		
	}else{
			//不满足条件
			speedYear=0;
			speedLi =155;
			speedMu=0;
			speedMi =140;
		}
}
,false)
$("body").on("mousewheel",function(){
	var  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if($("body").scrollTop()>=580&&$("body").scrollTop()<=910){
		if(lock ==false){
		var timerYear=setInterval(function(){
			speedYear++;
			speedLi+=3;
			speedMu++;
			speedMi+=3;
			if(speedYear>=6){
				speedYear=6;
				lock=true;
			}
			if(speedLi>=245){
				speedLi=245;
				clearInterval(timerYear);
				lock=true;
			}
			if(speedMu>=5){
				speedMu=5;
				lock=true;
			}
			if(speedMi>=198){
				speedMi=198;
				lock=true;
			}
			lock=false;
//			console.log($(".wall_text").eq(0).html())
			$(".wall_text").eq(0).html(speedYear);
			$(".wall_text").eq(1).html(speedLi);
			$(".wall_text").eq(2).html(speedMu);
			$(".wall_text").eq(3).html(speedMi);
			
		},150)
		}
		
	}else{
			//不满足条件
			speedYear=0;
			speedLi =155;
			speedMu=0;
			speedMi =140;
		}
	
});

//案例欣赏
$(".case_img").each(function(index,ele){
	$(ele).on("mouseenter",function(){
		$(".case_shade").eq(index).stop(true).slideDown(400);
		$(".case_text_shade").eq(index).stop(true).slideDown(400);
		$(".case_text").eq(index).css("color","white")
	})
})

$(".case_img").each(function(index,ele){
	$(ele).on("mouseleave",function(){
		$(".case_shade").eq(index).stop(true).slideUp(400);
		$(".case_text_shade").eq(index).stop(true).slideUp(400);
		$(".case_text").eq(index).css("color","black")
	})
})

//更多

$("#more").click(function(){
	window.open("case.html","_self");
})
////点击跳转
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
$(".nav_shouye").click(function(){
	$("html,body").animate({
		scrollTop:0,
	},500)
})
$(".nav_fuwu").click(function(){
	$("html,body").animate({
		scrollTop:$("#content_wrap").offset().top,
	},500)
})
$(".nav_anli").click(function(){
	$("html,body").animate({
		scrollTop:$("#caseAdmire").offset().top,
	},500)
})
$(".nav_kehu").click(function(){
	$("html,body").animate({
		scrollTop:$("#aboutUs").offset().top,
	},500)	
})
$(".nav_guanyu").click(function(){
	$("html,body").animate({
		scrollTop:$("#with_Us").offset().top,
	},500)
})
$(".nav_lianxi").click(function(){
	$("html,body").animate({
		scrollTop:$("#footer").offset().top,
	},500)
})
$("#responsive_logo").click(function(){
	
	if($("#responsive_nav_content").css("display")=="none"){
		$("#responsive_nav_content").css("display","block");
		$("#header").css("background","rgba(0,0,0,0)");
		$("#responsive_logo").animate({
		left:"-200px",
		},500)
	}else{
		$("#responsive_nav_content").css("display","none");
		$("#header").css("background","rgba(0,0,0,0.5)");
		$("#responsive_logo").animate({
		left:"-60px",
		},500)
	}
})
//添加客户展示
$("#about_list li").each(function(index,ele){
	$(ele).css({
		background:"url(img/logo"+(index+1)+".jpg)",
		backgroundRepeat:"no-repeat",
		backgroundSize:"100% 100%",
	})
	var about_shade = $("<div></div>");
	about_shade.css({
		width:"100%",
		height:"100%",
		background:"rgba(0,0,0,0.5)",
	})
	about_shade.appendTo($(ele));
	$(ele).on("mouseenter",function(){
		about_shade.stop(true).fadeOut();
		$(ele).css("border","1px solid #C71585");
	})
	$(ele).on("mouseleave",function(){
		about_shade.stop(true).fadeIn();
		$(ele).css("border","");
		
	})
})
//关于我们 自动轮播
//轮播函数
function aboutOpacity(){
	aboutSpeed++;
	if(aboutSpeed>=2){
		aboutSpeed=-1;
	}
	$("#with_dd dd").css("background","");
	$("#with_dd dd").eq(aboutSpeed).css("background","#00FFFF");
	$(".with_text").stop(true).fadeOut(1000);
	$(".with_text").eq(aboutSpeed).stop(true).fadeIn(1000);
}
var aboutSpeed = -1; //轮播
var aboutTimer=setInterval(aboutOpacity,2000);
function aboutOpacity(){
	aboutSpeed++;
	if(aboutSpeed>=2){
		aboutSpeed=-1;
	}
	$("#with_dd dd").css("background","");
	$("#with_dd dd").eq(aboutSpeed).css("background","#00FFFF");
	$(".with_text").stop(true).fadeOut(1000);
	$(".with_text").eq(aboutSpeed).stop(true).fadeIn(1000);
}

//关于我们

$(".with_text:gt(0)").css("display","none");
$("#with_dd dd").each(function(index,ele){
	//移入
	$(ele).on("mouseenter",function(){
			$("#with_dd dd").css("background","");
			$(this).css("background","#00FFFF");
			$(".with_text").stop(true).fadeOut(1000);
			$(".with_text").eq(index).stop(true).fadeIn(1000);
			aboutSpeed=index;
			clearInterval(aboutTimer);
	})
	
})
//离开轮播

$("#with_dd").on("mouseleave",function(){
	clearInterval(aboutTimer);
	aboutTimer=setInterval(aboutOpacity,2000);
})
//全屏滚动
$(function() {
	 $('#responsive_nav_content').css({'height': $(window).height()+40});
    $('.panel').css({'height': $(window).height()+40});
    $.scrollify({
        section: '.panel',
        scrollbars:false,
        scrollSpeed:3000,
    
    });

});


//屏幕大小监测
window.onresize=function(){
	$("#responsive_nav_content").css("display","none");
	$("#responsive_logo").animate({
		left:"-60px",
		},500);

}
$(".box_content").each(function(index,ele){
	$(ele).on("mouseenter",function(){
		$(".img").eq(index).animate({
		top:"5px",
		left:"-80px",
	},500);
	$(".name").eq(index).animate({
		top:"10px",
		left:"20px",
	},500)
	$(".list").eq(index).stop(true).animate({
		top:"80px",
		opacity:1,
	},500)
	})
});
//移出
$(".box_content").each(function(index,ele){
	$(ele).on("mouseleave",function(){
		$(".img").eq(index).stop(true).animate({
		top:"15%",
		left:"0px",
		
	},500);
	$(".name").eq(index).stop(true).animate({
		top:"60%",
		left:"0px",
	},500);
	$(".list").eq(index).stop(true).animate({
		top:"150px",
		opacity:0,
	},500)
	})
});
//侧边栏
$("#broadside_nav ul li").eq(1).on("mouseenter",function(){
	$("#qq_txt").stop(true).animate({
		right:"50px",
	},500)
	$("#phone_txt").stop(true).animate({
		right:"-200px",
	},500)
})

$("#qq_txt").on("mouseleave",function(){
		$("#qq_txt").stop(true).animate({
		right:"-200px",
	},500)
})
$("#broadside_nav ul li").eq(2).on("mouseenter",function(){
	$("#qq_txt").stop(true).animate({
		right:"-200px",
	},500)
})
$("#broadside_nav ul li").eq(0).on("mouseenter",function(){
	$("#qq_txt").stop(true).animate({
		right:"-200px",
	},500)
})
//phone
$("#broadside_nav ul li").eq(2).on("mouseenter",function(){
	$("#phone_txt").stop(true).animate({
		right:"50px",
	},500)
})
$("#phone_txt").on("mouseleave",function(){
		$("#phone_txt").stop(true).animate({
		right:"-200px",
	},500)
})
$("#broadside_nav ul li").eq(3).on("mouseenter",function(){
	$("#phone_txt").stop(true).animate({
		right:"-200px",
	},500)
})

var eleHeight = $(window).height();
var a =0;
//上下

var a=$(window).height()+40;
var b=0
$("#broadside_nav ul li").eq(3).on("click",function(){
		b+=a;
		if(b>=5160){
			b=5160;
		}		
		console.log(b)
		$("html,body").stop(true).animate({
			scrollTop:b,	
		},1000)
})
$("#broadside_nav ul li").eq(0).on("click",function(){
		b-=a;
		
		if(b<=0){
			b=0;
		}
		$("html,body").stop(true).animate({
			scrollTop:b,	
		},1000)
})

//点击开关侧边栏
$("#close").on("click",function(){
	$("#broadside_nav").fadeToggle(1000);
	$("#open").fadeToggle(1000);
	$("#paused").fadeToggle(1000);
})

//进入首页
//setTimeout(function(){
//	$("#sli2,#sli3,#sli4").css("display","block");
//	$(".swiper-slide-duplicate").css({
//		display:"block !important",
//	});
//	
//},3000)

setTimeout(function(){
	
},1000)
	$("#page2").css("display","none");
	$("#wrap").css("display","block");

//服务跳转
$("#more1").click(function(){
	window.open("serve.html","_self");
})
