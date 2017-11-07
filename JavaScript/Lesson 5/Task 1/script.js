//declare object with staff results
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

//declare variables with max values for comparison
var max = 0;
var maxKey = "";

//iterate through object try to find value bigger than max and store value and key
for (var key in tasksCompleted){
	if (max < tasksCompleted[key]){  
		max = tasksCompleted[key];  //store bigger value
		maxKey = key;               //store key of the bigger value
	}
}

console.log(max);     //display value (work results)
console.log(maxKey);  //display key (employee Name)