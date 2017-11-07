function whoIsLongest(str){
   var newstr = str.split(" ");
   var max = "";

//iterate through the length of the array indexes and assigns the max value to veriable "max"
   for (var i = 0; i < newstr.length; i++){
        if(newstr[i].length > max.length){
            max = newstr[i];
        }
   }
   return max;
}

var str = "Web Development Tutorial";
console.log(whoIsLongest(str));