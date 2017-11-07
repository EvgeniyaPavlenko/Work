function anClean(arr){
	var newArr = [];

	//iterate over given array
	//for each element start additional loop from the next position
	//in additional loop sort element from outer and inner loops
	//compare sorter elements, increase counter if they are equal
	//push the new array only elements with counter equal to the 1

	for (var i = 0; i < arr.length; i++){
		var counter = 1;

		for(var j = i + 1; j < arr.length; j++){
			var curEl = arr[i].toLowerCase().split("");
			var nextEl = arr[j].toLowerCase().split("");
			curEl.sort();
			nextEl.sort();
			curEl = curEl.join("");
			nextEl = nextEl.join("");

			if(curEl == nextEl){
				counter++;
			}
		}
		if(counter == 1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'