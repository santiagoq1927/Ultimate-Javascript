const letras = ['a','b']; 

//agregar al final
letras.push('c','d');

//agregar al comienzo
letras.unshift('y','z');

//agregar elemento en un lugar del array
letras.splice(3,0,1,2);

console.log(letras);