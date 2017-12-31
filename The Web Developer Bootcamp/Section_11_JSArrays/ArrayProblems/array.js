var nums = [2, 45, 3, 4, 5];
var letters = ["a", "a", "a"];

printReverse(nums);
console.log("****************");
isUniform(nums);
isUniform(letters);
console.log("****************");
sumArray(nums);
console.log("****************");
console.log("Max is: " + max(nums));

function printReverse(arr) {
   for (var i = arr.length-1; i >=0; i--) {
      console.log(arr[i]);
   }
}

function isUniform(arr) {
   var uniform = true;
   var first = arr[0];
   for (var i = 0; i < arr.length && uniform; i++) {
      if (arr[i] === first) {
         uniform = true;
      } else {
         uniform = false;
      }
   }
   if (uniform) {
      console.log("Array is uniform");
   } else {
      console.log("Array is not uniform");
   }
}

function sumArray(arr) {
   var total = 0;
   for (var i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   console.log("Array total is: " + total);
}

function max(arr) {
   var max = arr[0];
   for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}
