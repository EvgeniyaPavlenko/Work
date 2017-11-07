//Enter a label that help to get out of multiple levels of the loop.
outer: 
//output the numbers from 2 to 10
	for(i = 2; i <= 10; i++){
//output the numbers from 2 to i-1
		for (j = 2; j < i; j++){
//When the condition is true back to the label outer
			if (i % j == 0) continue outer;
		}
//display the result
		console.log(i);
	}