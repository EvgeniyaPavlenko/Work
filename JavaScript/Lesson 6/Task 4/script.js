var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compare); 

//compare the value of each element. Depends of the result return value1 or -1. 
//in this way we sort the elements with method sort on line 7. and using attribute “age” for comparing
function compare(a, b){
	if(a.age > b.age){  
		return 1;
	}
	if (b.age > a.age){
		return -1;
	}
}

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6