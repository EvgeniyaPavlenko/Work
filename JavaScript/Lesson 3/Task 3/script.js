//output the numbers from 1 to 100
for (var i = 1; i <= 100; i++){
//find condition which is true. in false case print number
	switch(true){
		case i % 3 == 0:
			console.log("Fizz");
			break;

		case i % 5 == 0 && i % 3 !== 0:
			console.log("Buzz");
			break;
		
		default:
			console.log(i);
			break;
	}
}