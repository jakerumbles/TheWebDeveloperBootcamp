var body = document.querySelector("body");
var isColor = false;

setInterval(function(){
   if (isColor) {
      body.style.background = "white";
   } else {
      body.style.background = "purple";
   }
   isColor = !isColor;
}, 150);
