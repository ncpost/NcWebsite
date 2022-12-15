function jj_settings(){
	// beaf 게시판 초기세팅
	$(".wrap li .slide_con_bottom_span").css({"opacity":"0.7"});
	$(".bear_div01 .thumbtxt").css({"opacity":"0.7"});
	// gnb 제이쿼리
	$(".header_wrap").css({"height":"150px"});
	$(".header .gnb .depth_02 .dep02").css({"display":"none"});

	// 각 뎁스1 별로 .ticker 가 위치할 자리를 알아내는 data 선언
	$(".header .gnb > ul li").each(function(index){
		$(this).data({"tick_pos":0});
		for(var i=1 ; i<=index ; i++){
			//$(this).data({"tick_pos":$(this).data("tick_pos")+parseFloat($(".header .gnb > ul li").eq(index-1).css("width"))+parseFloat($(".header .gnb > ul li").eq(index).css("margin-left"))});
			$(this).data({"tick_pos":$(this).data("tick_pos")+118});
		};
	});

	$(".header .gnb > ul li a").on("mouseenter",function(e){
		var jayjunaesthetic= $(this)[0].id;
		if(jayjunaesthetic =='li_09a') {
			$(".header_wrap").css({"height":"150px"});
			$(".header .gnb .depth_02 .dep02").css({"display":"none"});
			TweenMax.to($(".gnb .ticker"),0.6,{"left":"9999px","width":0,"ease":"Expo.easeInOut"});
		} else {
		$(".header_wrap").css({"height":"307px"});
		$(".header .gnb .depth_02 .dep02").css({"display":"none"});
		$(".header .gnb .depth_02 .dep02").eq($(this).parent().index()).css({"display":"block"});
		TweenMax.to($(".gnb .ticker"),0.6,{"left":$(this).parent().data("tick_pos")+((100-parseFloat($(this).children("img").css("width")))/2),"width":parseFloat($(this).children("img").css("width")),"ease":"Expo.easeOut"});
		}
	}).hover(function(e){
		var src_txt = $(this).children("img").attr("src");
		$(this).children("img").attr({"src":src_txt.replace("_off","_on")});
	},function(e){
		var src_txt = $(this).children("img").attr("src");
		$(this).children("img").attr({"src":src_txt.replace("_on","_off")});
	});

	$(".header_wrap").on("mouseleave",function(e){
		$(".header_wrap").css({"height":"150px"});
		$(".header .gnb .depth_02 .dep02").css({"display":"none"});
		TweenMax.to($(".gnb .ticker"),0.6,{"left":"9999px","width":0,"ease":"Expo.easeInOut"});
	});

	$(".header .depth_02 .dep02 ul li a").hover(function(e){
		var src_txt = $(this).children("img").attr("src");
		$(this).children("img").attr({"src":src_txt.replace("_off","_on")});
	},function(e){
		var src_txt = $(this).children("img").attr("src");
		$(this).children("img").attr({"src":src_txt.replace("_on","_off")});
	});


	// 메인비쥬얼01 바네이
	$(".main_visual .blinder").css({"opacity":"0","display":"none"});

	var mv01_cur = 0;
	var mv01_prev = null;
	var mv01_ea = $(".main_visual_01 .imgs > li").size() - 1;
	var src_txt = null;
	var current_li_01;
	var prev_li_01;
	
	function blinder_set_01(){
		$(".main_visual_01 .blinder").css({"display":"none"});
		barney_dalay_01 = setInterval(barney_auto_01,4000);
	};

	$(".main_visual_01 .indis > ul > li > a").on("click",function(e){
		if($(this).parent().index() != mv01_cur){
			$(".main_visual_01 .blinder").css({"display":"block"});
			clearInterval(barney_dalay_01);
			mv01_prev = mv01_cur;
			mv01_cur = $(this).parent().index();
			$(".main_visual_01 .indis > ul > li > a > img").attr({"src":"../img/jj_main_visual_indi_off.gif"});
			$(".main_visual_01 .indis > ul > li").eq(mv01_cur).find(" > a > img").attr({"src":"../img/jj_main_visual_indi_on.gif"});
			prev_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_prev);
			current_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_cur);
			TweenMax.fromTo(prev_li_01,0.8,{"left":"0"},{"left":"-100%","ease":"Expo.easeInOut"});
			TweenMax.fromTo(current_li_01,0.8,{"left":"100%"},{"left":"0","ease":"Expo.easeInOut","onComplete":blinder_set_01});
		};
	});
	// 메인비쥬얼01 좌우 버튼
	$(".main_visual_01 .right_bn > a").on("click",function(e){
		$(".main_visual_01 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_01);
		mv01_prev = mv01_cur;
		mv01_cur++;
		if(mv01_cur > mv01_ea){
			mv01_cur = 0;
			mv01_prev = mv01_ea;
		};
		$(".main_visual_01 .indis > ul > li > a > img").attr({"src":"../img/jj_main_visual_indi_off.gif"});
		$(".main_visual_01 .indis > ul > li").eq(mv01_cur).find(" > a > img").attr({"src":"../img/jj_main_visual_indi_on.gif"});
		prev_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_prev);
		current_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_cur);
		TweenMax.fromTo(prev_li_01,0.8,{"left":"0"},{"left":"-100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_01,0.8,{"left":"100%"},{"left":"0","ease":"Expo.easeInOut","onComplete":blinder_set_01});
	});
	$(".main_visual_01 .left_bn > a").on("click",function(e){
		$(".main_visual_01 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_01);
		mv01_prev = mv01_cur;
		mv01_cur--;
		if(mv01_cur < 0){
			mv01_cur = mv01_ea;
			mv01_prev = 0;
		};
		$(".main_visual_01 .indis > ul > li > a > img").attr({"src":"../img/jj_main_visual_indi_off.gif"});
		$(".main_visual_01 .indis > ul > li").eq(mv01_cur).find(" > a > img").attr({"src":"../img/jj_main_visual_indi_on.gif"});
		prev_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_prev);
		current_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_cur);
		TweenMax.fromTo(prev_li_01,0.8,{"left":"0"},{"left":"100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_01,0.8,{"left":"-100%"},{"left":"0","ease":"Expo.easeInOut","onComplete":blinder_set_01});
	});

	function barney_auto_01(){
		$(".main_visual_01 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_01);
		mv01_prev = mv01_cur;
		mv01_cur++;
		if(mv01_cur > mv01_ea){
			mv01_cur = 0;
			mv01_prev = mv01_ea;
		};
		$(".main_visual_01 .indis > ul > li > a > img").attr({"src":"../img/jj_main_visual_indi_off.gif"});
		$(".main_visual_01 .indis > ul > li").eq(mv01_cur).find(" > a > img").attr({"src":"../img/jj_main_visual_indi_on.gif"});
		prev_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_prev);
		current_li_01 = $(".main_visual_01 .imgs > li").eq(mv01_cur);
		TweenMax.fromTo(prev_li_01,0.8,{"left":"0"},{"left":"-100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_01,0.8,{"left":"100%"},{"left":"0","ease":"Expo.easeInOut","onComplete":blinder_set_01});
	};
	var barney_dalay_01 = setInterval(barney_auto_01,4000);


	// 메인비쥬얼02 바네이
	var mv02_cur = 0;
	var mv02_prev = null;
	var mv02_ea = $(".main_visual_02 .imgs > li").size() - 1;
	var current_li_02;
	var prev_li_02;
	
	function blinder_set_02(){
		$(".main_visual_02 .blinder").css({"display":"none"});
		barney_dalay_02 = setInterval(barney_auto_02,4000);
	};

	// 메인비쥬얼02 좌우 버튼
	$(".main_visual_02 .down_bn > a").on("click",function(e){
		$(".main_visual_02 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_02);
		mv02_prev = mv02_cur;
		mv02_cur++;
		if(mv02_cur > mv02_ea){
			mv02_cur = 0;
			mv02_prev = mv02_ea;
		};
		prev_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_prev);
		current_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_cur);
		TweenMax.fromTo(prev_li_02,0.8,{"top":"0"},{"top":"-100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_02,0.8,{"top":"100%"},{"top":"0","ease":"Expo.easeInOut","onComplete":blinder_set_02});
	});
	$(".main_visual_02 .up_bn > a").on("click",function(e){
		$(".main_visual_02 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_02);
		mv02_prev = mv02_cur;
		mv02_cur--;
		if(mv02_cur < 0){
			mv02_cur = mv02_ea;
			mv02_prev = 0;
		};
		prev_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_prev);
		current_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_cur);
		TweenMax.fromTo(prev_li_02,0.8,{"top":"0"},{"top":"100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_02,0.8,{"top":"-100%"},{"top":"0","ease":"Expo.easeInOut","onComplete":blinder_set_02});
	});

	function barney_auto_02(){
		$(".main_visual_02 .blinder").css({"display":"block"});
		clearInterval(barney_dalay_02);
		mv02_prev = mv02_cur;
		mv02_cur++;
		if(mv02_cur > mv02_ea){
			mv02_cur = 0;
			mv02_prev = mv02_ea;
		};
		prev_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_prev);
		current_li_02 = $(".main_visual_02 .imgs > li").eq(mv02_cur);
		TweenMax.fromTo(prev_li_02,0.8,{"top":"0"},{"top":"-100%","ease":"Expo.easeInOut"});
		TweenMax.fromTo(current_li_02,0.8,{"top":"100%"},{"top":"0","ease":"Expo.easeInOut","onComplete":blinder_set_02});
	};
	var barney_dalay_02 = setInterval(barney_auto_02,4000);


	// 의료진소개 페이지 팝업 제이쿼리
	$(".pop_blind").css({"opacity":"0.8"});
	var team_pop = false;
	$(".cons.pops .call_pop").on("click",function(e){
		if(team_pop == false){
			team_pop = true;
			$(this).parent().find(".pop_area").css({"display":"block"});
			$(".pop_blind").css({"display":"block"});
			$("body").addClass("of_hiddener");
		};
	});

	$(".cons.pops .pop_area a").on("click",function(e){
		if(team_pop == true){
			team_pop = false;
			$(this).parent().parent().css({"display":"none"});
			$(".pop_blind").css({"display":"none"});
			$("body").removeClass("of_hiddener");
		};
	});
	
	$(".system li").each(function(){  //클래스 네임 변경
		var image = $(this).children("img");
		var imgsrc = $(image).attr("src");
		//add mouseOver
		$(this).mouseover(function(){
			var on = imgsrc.replace(/.jpg/,"_on.jpg"); 
			$(image).attr("src",on);
		});
		
		//add mouseOut
		$(this).mouseout(function(){
			var off = imgsrc.replace(/_on.jpg/,".jpg");
			$(image).attr("src",off);
		});
	});
};