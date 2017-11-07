//borrow method reduce
//through "call" pass "this" to reduce
//As "this" send arguments

function sumArgs(){
	return [].reduce.call(arguments, function(a, b){
		return a + b;
	})
}

alert( sumArgs(4, 5, 6) ); // 15