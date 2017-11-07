function sum (a,b){
if(b!=undefined){
   return a + b;
}else{
  return function(b){
   return a + b;
    }
   }
}


console.log(sum(2,3) == 5);
console.log(sum(3)(3) == 6);