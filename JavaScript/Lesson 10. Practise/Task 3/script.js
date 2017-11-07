function reverseIt(data){
    if (typeof(data) == "string"){
      return data.split("").reverse().join("");
    }else{
      return data
    }
 }


console.log(reverseIt('Hello') == "olleH");
console.log(reverseIt("314159") == "951413");;
console.log(reverseIt([1,3,4]).toString() == [1,3,4].toString());