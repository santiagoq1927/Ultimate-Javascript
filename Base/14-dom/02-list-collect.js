let colletion = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(colletion,list);

// let item1 =colletion.namedItem('Chanchito');
// let item2 =colletion.item(3);
// let item3 =colletion[3];

//Iterar elementos
// for(let elemento of colletion){
//     console.log(elemento);
// }

//Array.from(colletion).forEach(z=>console.log(z));
//[...colletion].forEach(z=>console.log(z));

//nodelist
// let item1 = list.item(3);
// let item2 = list[3];

list.forEach(x=>console.log(x));

//entries, keys y values
let entries = list.entries();
let keys = list.keys();
let values = list.values();