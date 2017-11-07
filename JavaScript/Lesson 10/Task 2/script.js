/*
pass arguments to the function in an array.
using the built-in function returns 
the largest number
*/

function getMaxNumber(arr){
  console.log(Math.max.apply(null,arr))
}
getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15
