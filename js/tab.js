
/*  탭 ========================================== */
/* roll over-out image */
function menuOver() {
	if(this.src.substring(this.src.length-7) != "_on.png")		// 현재 파일에 7을 빼서 _on.gif랑 같지 않으면 _on.gif로 바꾸기
		this.src = this.src.replace("_off.png", "_on.png");
}
function menuClick() {
	if(this.id.indexOf("menu-image") > -1) {
		var submenu = document.getElementById("menu" + this.id.substring(10));
		var uls = submenu.getElementsByTagName("ul");
		if(uls.length>0){
			if(uls[0].style.display == "none")
				uls[0].style.display = "block";
			else
				uls[0].style.display = "none";
		}
	}
}
function menuOut() {
		this.src = this.src.replace("_on.png", "_off.png");			// 현재 파일을 .gif로 바꿔주기 if문 안쓰는 이유 .gif
}
 /*여기숫정*/
function initImgEffect(ImgEls,SelImg) {
	MenuImg = document.getElementById(ImgEls).getElementsByTagName("img");
	MenuImgLen = MenuImg.length;
	for (i=0; i<MenuImgLen; i++) {
		MenuImg.item(i).onmouseover = menuOver;
		MenuImg.item(i).onmouseout = menuOut;
		MenuImg.item(i).onfocus = menuOver;
		MenuImg.item(i).onblur = menuOut;
		if (i == SelImg) {
			MenuImg.item(i).onmouseover();
			MenuImg.item(i).onmouseover = null;
			MenuImg.item(i).onmouseout = null;
			MenuImg.item(i).onfocus = null;
			MenuImg.item(i).onblur = null;
		}
	}
}
function outImgEffect(ImgEls,SelImg) {
	MenuImg = document.getElementById(ImgEls).getElementsByTagName("img");
	MenuImgLen = MenuImg.length;
	for (i=0; i<MenuImgLen; i++) {
		MenuImg.item(i).onmouseover = menuOver;
		MenuImg.item(i).onmouseout = menuOut;
		MenuImg.item(i).onfocus = menuOver;
		MenuImg.item(i).onblur = menuOut;
		if (i != SelImg) 	{
			MenuImg.item(i).onmouseout();
			MenuImg.item(i).onmouseover = null;
			MenuImg.item(i).onmouseout = null;
			MenuImg.item(i).onfocus = null;
			MenuImg.item(i).onblur = null;
		}
	}
}
function selectTab(id, num, m, tag) {
	if (tag == null) tag = "dl";
	var dv = document.getElementById(id + "_panel");
	if(!dv) return;
	var dl = dv.getElementsByTagName(tag);
	if(!dl) return;
	outImgEffect(id,num);
	initImgEffect(id,num);
	for(i=0;i<dl.length;i++){
		if(num == i) {
			dl[i].style.display="block";
			var ll = document.getElementById(id + "_more");
			if(ll) ll.href = m[num];
		}
		else{
			dl[i].style.display="none";
		}
	}
}
/*  //탭 ========================================== */

/*  main_medical */
jQuery(document).ready(function(){

		jQuery(".medicalCenterLink li").each(function(){
			var link = jQuery(this).children("a");
			var image = jQuery(link).children("img");
			var imgsrc = jQuery(image).attr("src");

			// add mouseover
			jQuery(link).mouseover(function(){
				var on = imgsrc.replace(/_off.png/gi,"_on.png");
				jQuery(image).attr("src",on);
			});

			// add mouse out
			jQuery(link).mouseout(function(){
				jQuery(image).attr("src",imgsrc);
			});
		});
});





