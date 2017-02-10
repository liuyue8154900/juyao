var a = $(window).height();
$("body").height(a);
//视频动画
$(".list_more").each(function(index, ele) {
	$(ele).click(function() {
		if(index == "0" || index == "2") {
			$(".list_video").eq(index).stop(true).animate({
				height: "100%",
			}, 1000, function() {
				$(".list_video").eq(index).stop(true).animate({
					width: "300%",
				}, 1000, function() {
					$(".video_list1_text").eq(index).stop(true).animate({
						right: 0,
					}, 800)
				})
				$("#page2_list li,#page2_list2 li").not($(ele).parent().parent()).stop(true).animate({
					left: "66.66%",
				}, 1000);
			});
			$(".triangular").eq(index).fadeOut(200);
			$(".list_text").eq(index).stop(true).animate({
				top: "100%",
			}, 1500)
			$("#video_left,#video_right").fadeOut(500);
			//关闭全屏显示
			$(".video_close").eq(index).click(function() {
				$(".video_list1_text").eq(index).stop(true).animate({
					right: "-50%",
				}, 800, function() {
					$(".list_video").eq(index).stop(true).animate({
						width: "100%",
						height: "50%",
					}, 1000)
				})
				$("#page2_list li,#page2_list2 li").not($(ele).parent().parent()).stop(true).animate({
					left: "0",
				}, 2000);
				$(".triangular").eq(index).fadeIn(3000);
				$(".list_text").eq(index).stop(true).animate({
					top: "50%",
				}, 1500)
				$("#video_left,#video_right").fadeIn(500);
			})

		}
		if(index == "1" || index == "3") {
			$(".list_video").eq(index).stop(true).animate({
				height: "100%",
			}, 1000, function() {
				$(ele).parent().parent().stop(true).animate({
					left: "-66.66%",
				}, 1000)
				$(".list_video").eq(index).stop(true).animate({
					width: "300%",
				}, 1000, function() {
					$(".video_list1_text").eq(index).stop(true).animate({
						right: 0,
					}, 800)
				})
				$("#page2_list li,#page2_list2 li").not($(ele).parent().parent()).stop(true).animate({
					left: "-66.66%",
				}, 1000);
			});
			$(".triangular").eq(index).fadeOut(200);
			$(".list_text").eq(index).stop(true).animate({
				top: "100%",
			}, 1500)
			$("#video_left,#video_right").fadeOut(500);
			//关闭全屏显示
			$(".video_close").eq(index).click(function() {
				$(".video_list1_text").eq(index).stop(true).animate({
					right: "-50%",
				}, 800, function() {
					$(ele).parent().parent().stop(true).animate({
						left: "0",
					}, 1000)
					$(".list_video").eq(index).stop(true).animate({
						width: "100%",
						height: "50%",
					}, 1000)
				})
				$("#page2_list li,#page2_list2 li").not($(ele).parent().parent()).stop(true).animate({
					left: "0%",
				}, 2000);
				$(".triangular").eq(index).fadeIn(3000);
				$(".list_text").eq(index).stop(true).animate({
					top: "50%",
				}, 1500)
				$("#video_left,#video_right").fadeIn(500);
			})

		}

	})

})

//中间视频动画
$(".list_more1").each(function(index, ele) {
	$(ele).click(function() {
		if(index == "0" || index == "1") {
			$(".list_video1").eq(index).stop(true).animate({
				top: 0,
				height: "100%",
			}, 1000, function() {
				$(ele).parent().parent().stop(true).animate({
					left: "-33.33%",
				}, 1000)
				$(".list_video1").eq(index).stop(true).animate({
					width: "300%",
				}, 1000, function() {
					$(".video_list1_text1").eq(index).stop(true).animate({
						right: 0,
					}, 800)
				})
				$("#page2_list li").eq(index).stop(true).animate({
					left: "-33.33%",
				}, 1000);
				$("#page2_list li").eq(index + 2).stop(true).animate({
					right: "-33.33%",
				}, 1000);
				//page2
				$("#page2_list2 li").eq(index - 1).stop(true).animate({
					left: "-33.33%",
				}, 1000);
				$("#page2_list2 li").eq(index + 1).stop(true).animate({
					right: "-33.33%",
				}, 1000);
			});
			$(".triangular1").eq(index).fadeOut(200);
			$(".list_text1").eq(index).stop(true).animate({
				top: "-50%",
			}, 1500)
			$("#video_left,#video_right").fadeOut(500);
			//关闭全屏显示
			$(".video_close1").eq(index).click(function() {
				$(".video_list1_text1").eq(index).stop(true).animate({
					right: "-50%",
				}, 800, function() {
					$(ele).parent().parent().stop(true).animate({
						left: 0,
						top: 0,
					}, 1000)
					$(".list_video1").eq(index).stop(true).animate({
						width: "100%",
						height: "50%",
						top: "46.15%",
					}, 1000)
				})
				$("#page2_list li").eq(index).stop(true).animate({
					left: "0",
				}, 1000);
				$("#page2_list li").eq(index + 2).stop(true).animate({
					right: "0",
				}, 1000);
				//page2
				$("#page2_list2 li").eq(index - 1).stop(true).animate({
					left: "0",
				}, 1000);
				$("#page2_list2 li").eq(index + 1).stop(true).animate({
					right: "0",
				}, 1000);
				$(".triangular1").eq(index).fadeIn(3000);
				$(".list_text1").eq(index).stop(true).animate({
					top: 0,
				}, 1500)
				$("#video_left,#video_right").fadeIn(500);
			})

		}

		//点击事件结束
	});
})

//左右点击事件
$("#video_left").click(function() {

	$("#page2_content").stop(true).toggle(2000);
	$("#page2_content2").stop(true).toggle(2000);
})
$("#video_right").click(function() {

	$("#page2_content").stop(true).toggle(2000);
	$("#page2_content2").stop(true).toggle(2000);
})


//响应式菜单
$("#responsive_logo1").click(function(){
	if($("#responsive_nav_content").css("display")=="none"){
		$("#responsive_nav_content").css("display","block");
		$("#header").css("background","rgb(0,0,0)");
		$("#responsive_logo1").animate({
		right:"165px",
		},500)
	}else{
		$("#responsive_nav_content").css("display","none");
		$("#header").css("background","rgb(0,0,0)");
		$("#responsive_logo1").animate({
		right:"60px",
		},500)
	}
})
