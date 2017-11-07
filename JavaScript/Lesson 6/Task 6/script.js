function unique(arr){
	var newArr = [];


	//iterate with cycle over given arr
    //for each element in cycle create counter - number which represents how many this elements in the given array
    //create inner loop for each element and increase counter if element also exists in the array
    //push to the new array only elements which counter is equal to the 1

	for(var i = 0; i < arr.length; i++){
		var counter = 1;

		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] == arr[j]){
				counter++;
			}
		}

		if (counter == 1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()