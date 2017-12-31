var secretNumber = 4;

var guess = Number(prompt("Guess a number"));
if (guess === secretNumber) {
   alert("You got it!");
}
else if (guess > secretNumber) {
   alert("Too high");
}
else if (guess < secretNumber) {
   alert("Too low");
}
