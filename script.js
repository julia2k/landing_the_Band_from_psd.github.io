$(document).ready(calcHeight());

document.onclick=function(event){
    if (event.target.tagName== "IMG" && event.target.parentNode.tagName=="A"){
       document.getElementById('video-img').classList.add("d-none");
       document.getElementById('video-frame').classList.add("d-block");
      document.getElementById('iframeId').src="https://www.youtube.com/embed/rbSY6vwUmYk?autoplay=1";

    }
}




function calcHeight(){
let bgWidth=$(".wrap").width();
let bgHeight=bgWidth/100*83.4;
 $(".wrap").height(bgHeight);
}

$(window).resize(function(){
	let bgWidth=$(".wrap").width();
let bgHeight=bgWidth/100*83.4;
 $(".wrap").height(bgHeight);
});