var closebtn = document.getElementById('popover_close'),
count = 0;
var timer = setInterval(function() { 
  $('.modal').modal('show') }, 180000);
closebtn.onclick = function() {
 count += 1;
  console.log(count)
if(count === 2)
{
  clearInterval(timer)
}
};



// 180000