//HTMLElement
let htmlElement = document.getElementById("cuerpo");
//HTMLCollectios
let elementsRed=document.getElementsByClassName('red');
//NodeList
let elementName = document.getElementsByName('Chanchito');
//HTMLCollectios
let parrafos = document.getElementsByTagName('p');
//HTMLElement
let elemento = document.querySelector('#cuerpo');
//NodeList
let elementos= document.querySelectorAll('p');

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive,pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive,pstatic);