//响应式菜单
$("#responsive_logo1").click(function(){
	if($("#responsive_nav_content").css("display")=="none"){
		$("#responsive_nav_content").css("display","block");
		$("#responsive_logo1").animate({
		right:"165px",
		},500)
	}else{
		$("#responsive_nav_content").css("display","none");
		$("#responsive_logo1").animate({
		right:"60px",
		},500)
	}
})
//全屏滚动
$(function() {
	 $('#wrap').css({'height': $(window).height()});
//  $('.panel').css({'height': $(window).height()+40});
//  $.scrollify({
//      section: '.panel',
////      scrollbars:false,
//      scrollSpeed:3000,
//  
//  });

});



//鼠标移入事件
$("#d1 img").eq(0).stop(true).animate({
	opacity:1,
},1000,function(){
	$("#d2_img1 img").eq(0).stop(true).animate({
	opacity:1,
},1000,function(){
	$("#d2_img2 img").eq(0).stop(true).animate({
		opacity:1,
	},1000,function(){
		$("#d3_img img").eq(0).stop(true).animate({
			opacity:1,
		},1000,function(){
			$("#d3_img1 img").eq(0).stop(true).animate({
				opacity:1,
			},1000,function(){
				$("#d3_img2 img").eq(0).stop(true).animate({
					opacity:1
				},1000,function(){
					$("#d3_img2 img").eq(0).stop(true).animate({
						opacity:0,
					},1000,function(){
						$("#d2 img,#d1 img,#d3 img").stop(true).animate({
							opacity:1,
						},1000,function(){
							$("#d1 img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
							$("#d2_img1 img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
							$("#d2_img2 img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
							$("#d3_img img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
							$("#d3_img1 img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
							$("#d3_img2 img").eq(0).stop(true).animate({
								opacity:0,
							},1500)
						})
					})
				})
				$("#d3_img1 img").eq(0).stop(true).animate({
					opacity:0,
				},1500)
			})
			$("#d3_img img").eq(0).stop(true).animate({
				opacity:0,
			},1500)
		})
		$("#d2_img2 img").eq(0).stop(true).animate({
			opacity:0,
		},1500)
	})
	$("#d2_img1 img").eq(0).stop(true).animate({
		opacity:0,
	},1500)
})
$("#d1 img").eq(0).stop(true).animate({
	opacity:0,
},1500)
	
})


//滚轮事件
// 鼠标滚轮事件的兼容性处理
	var info  = navigator.userAgent;  // 浏览器嗅探
	if(info.indexOf("Firefox") != -1){
		//这是火狐浏览器
		window.addEventListener("DOMMouseScroll",function(event){
			var ev =event || window.event;
			if(ev.detail > 0){
				$("#d1").animate({
					top:"-60%",
					left:"-160%"
				},1200)
				$("#d2").animate({
					top:"-50%",
					right:"-200%"
				},1200)
				$("#d3").animate({
					left:"-200%"
				},1200)
				$("#case_list").stop(true).fadeIn(1200);
				$("#case_close").stop(true).fadeIn(1200);
			}else{
				return;
			}
		},false)
	}else{
		window.onmousewheel = function(event){
			var  ev = event || window.event;

			//wheelDelta 不关注本身的大小,我们可以通过它的正负判断,鼠标滚轮的方向.
			if(ev.wheelDelta > 0){
//				$("#case_wrap").stop(true).fadeIn(3000);
				return;
			}else{
				$("#d1").animate({
					top:"-60%",
					left:"-160%"
				},1800)
				$("#d2").animate({
					top:"-50%",
					right:"-200%"
				},1800)
				$("#d3").animate({
					left:"-200%"
				},1800);
				$("#case_list").stop(true).fadeIn(1500);
				$("#case_close").stop(true).fadeIn(1500);
			}
		}
	}
	
	//创建li遮罩
	
	$("#case_list_show li").each(function(index,ele){
		var liShade=$("<div></div>");
		liShade.attr("class","li_shadeCase");
		liShade.css({
			width:"100%",
			height:"91.5%",
			background:"rgba(0,0,0,0.5)",
			paddingTop:"8.5%",
			opacity:0,
			
		});
		liShade.appendTo($(ele));
		$(ele).css("background","url(img/case_show"+(index+1)+".jpg)");
		$(ele).css({
			backgroundSize:"100% 100%",
		})
		//创建遮罩里面内容
		var shade_line=$("<div></div>");
		shade_line.attr("class","shade_line")
		shade_line.appendTo($(".li_shadeCase"));
		shade_line.css({
			width:"80%",
			height:"80%",
			border:"1px solid white",
			margin:"0 auto 0",
		
			
		})
		
		
		$(ele).on("mouseenter",function(){
			$(".shade_text").eq(index).stop(true).fadeIn(1000);
			$(".li_shadeCase").eq(index).stop(true).animate({
				opacity:1,
			},400)
			//li 放大
			var speed =1;
			var timer=setInterval(function(){
				speed+=0.01;
				if(speed>=1.05){
					clearInterval(timer);
				}
				$(ele).css("transform","scale("+speed+")")
			},50)
		})
		$(ele).on("mouseleave",function(){
			$(".shade_text").eq(index).stop(true).fadeOut(1000);
			$(".li_shadeCase").eq(index).stop(true).animate({
				opacity:0,
			},400)
//			//li 缩放
			var speed =1.05;
			var timer=setInterval(function(){
				speed-=0.01;
				if(speed<=1){
					clearInterval(timer);
				}
				$(ele).css("transform","scale("+speed+")")
			},50)
//		
		})
	})

$("#case_close").on("mouseenter",function(){
	$("#case_close").css("-webkit-animation","closeA 0.4s linear forwards");
})


//关闭按钮离开
$("#case_close").on("mouseleave",function(){
	$("#case_close").css("-webkit-animation","closeB 0.4s linear");
})


//关闭按钮点击事件
$("#case_close").click(function(){
	$("#d1").animate({
					top:"0%",
					left:"0%"
				},800)
				$("#d2").animate({
					top:"0%",
					right:"0%"
				},700)
				$("#d3").animate({
					left:"0%"
				},600);
	$("#case_list").fadeOut(1200);
	$("#case_close").fadeOut(1200);
				
})
