function removeClass(obj, cls){
	var arr = obj.className.split(" "); //Split string by " ".
	var newArr = [];

	for(var i = 0; i < arr.length; i++){
		if (arr[i] != cls){            //check that the values of array did not match cls
			newArr.push(arr[i]);       //if word isn’t matched, push element to array
		}
	}
	obj.className = newArr.join(" ");  ////transform the array into a string and assign to the attribute className
}

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'. display new array