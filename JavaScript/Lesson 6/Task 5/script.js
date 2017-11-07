function  isPal(string){
	var arr = string.toLowerCase().split(" ").join("").split("");  //remove spaces and convert string to the array
	var revArr = arr.slice(); //transfer all elements from array to new array
	revArr.reverse();         //output the values in the reverse order

//check the match of both arrays. if at least one value is not the same interrupt the cycle
	for(var i = 0; i < arr.length; i++){
		if (arr[i] != revArr[i]){  
			return false;
		}
	}
	return true;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false