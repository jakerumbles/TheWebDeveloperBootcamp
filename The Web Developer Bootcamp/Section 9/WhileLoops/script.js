var count = -10;
while (count < 20) {
   console.log(count);
   count++;
}
console.log("break");

count = 10;
while (count <= 40) {
   if (count % 2 == 0) { //is even number
      console.log(count);
   }
   count++;
}

console.log("break");

count = 300;
while (count <= 333) {
   if (count % 2 == 1) { // number is odd
      console.log(count);
   }
   count++;
}

console.log("break");

count = 5;
while (count < 51) {
   if (count % 5 == 0 && count % 3 == 0) {
      console.log(count);
   }
   count++;
}
