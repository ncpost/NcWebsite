const thumbs = document.getElementById("thumbnails");
const slide_image = document.querySelector("#doc_slide img");
const caption = document.querySelector(".doctor_info p");
const caption2 = document.querySelector(".doctor_info span");


thumbs.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.nodeName.toLowerCase() == 'img') {
    var img_source = e.target.src;
let newSrc = img_source.replace("5x5");
slide_image.src = newSrc;
    caption.textContent = e.target.alt;
    caption2.textContent = e.target.title;
  }
});