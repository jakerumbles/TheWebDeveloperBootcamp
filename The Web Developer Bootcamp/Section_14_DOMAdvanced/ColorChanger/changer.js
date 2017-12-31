var button = document.querySelector("button");
var isPurple = false;

//button logic
// button.addEventListener("click", function(){
//    if (isPurple) { //change to white
//       document.body.style.background = "white";
//    } else {
//       document.body.style.background = "black";
//    }
//    isPurple = !isPurple;
// });

//button logic
button.addEventListener("click", function(){
   document.body.classList.toggle("purple");
});
