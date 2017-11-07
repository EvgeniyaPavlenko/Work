//variable declaration. Number of lines gets from user.
var lines = prompt("Введите количество строк", 10);
var hash = "#";
var ctr = " ";
var table = "";

//run lines loop
for (var i = 0; i < lines; i++){
//run symbols in line loop
	for(var j = 0; j < lines; j++){
//decide which symbol to input, depends on line number
		if (i % 2==0){
			table += hash+ctr;
		}else{
			table += ctr+hash;
		}
	}
//the last symbol of the line should always be new line symbol
	table += "\n";
}

console.log(table);
