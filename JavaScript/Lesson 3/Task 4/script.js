//output the numbers from 1 to 100

for (i = 1; i <= 100; i++){
//find condition which is true. in false case print number
	switch(true){
		case i % 3 == 0 && i % 5 == 0:
			console.log("FizzBuzz")
			break;

		case i % 5 == 0 && i % 3 !== 0:
			console.log("Buzz")
			break;

		case i % 3 == 0:
			console.log("Fizz");
			break;

		default:
			console.log(i);
			break;
	}
}
