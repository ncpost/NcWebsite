function jj_tabmenu(obj,index_01){
	if(obj.children("li").size() > index_01){
		var src_txt = obj.children("li").eq(index_01).find("a > img").attr("src");
        if(index_01!='3'){
            obj.children("li").eq(index_01).find("a img").attr({"src":src_txt.replace("_off","_on")});
        }
		obj.children("li").eq(index_01).addClass("on");
	};

	var current = index_01;
	var prev = null;
	obj.children("li").hover(function(e){
		if($(this).index() != index_01){
			var src_txt = $(this).children("a").children("img").attr("src");
			$(this).find("a img").attr({"src":src_txt.replace("_off","_on")});
			$(this).addClass("on");
		};
	},function(e){
		if($(this).index() != index_01){
			var src_txt = $(this).children("a").children("img").attr("src");
			$(this).find("a img").attr({"src":src_txt.replace("_on","_off")});
			$(this).removeClass("on");
		};
	});
};