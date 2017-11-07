var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];

for (var i = 0; i < arr.length; i++){
	arrSorted.push(arr[i]);           //move items into the new array
}
arrSorted.sort();                    //sort items in the new array

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)