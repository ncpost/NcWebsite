var i=0, imgArr=new Array();
imgArr[1] = "img/doctors_1.jpg";
imgArr[2] = "img/doctors_2.jpg";
function showImg(imgNum){
  if (imgNum>=0) i=imgNum;
  document.getElementById('myImg').src = imgArr[i];
  i = (i+1) % 2;
}
function show(){
  setInterval(showImg, 2000); /* 播放速度 */
}