var arr = [1, 2, 3, 4, 5];

arr.sort(compareNumeric);


function compareNumeric(a, b){
	var choise = [-1, 0, 1]; 								    //define possible values which function returns
	var randIndex = Math.floor(Math.random() * choise.length);  // calculate random index for possible choices
	return choise[randIndex];                                   // return random value from possible values 
}

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
