var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
var frequency = [];
var newarr = [];

for(var i = 0; i < arr.length; i++){
 if (frequency[arr[i]] == undefined){
  frequency[arr[i]]=1;
 }else{
  frequency[arr[i]] += 1;
 }
}

for (key in frequency){
 newarr.push(key);
}

newarr.sort(function(a, b){ return frequency[a] - frequency[b]; })

console.log(newarr);