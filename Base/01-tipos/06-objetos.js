let nombre = "Bart";
let serie = "Los Simpson";
let edad = 10;

let personaje ={
    nombre: "Bart",
    serie: "Los Simpson",
    edad: 10,
};
console.log(personaje);
console.log(personaje.edad);
console.log(personaje['nombre']);  

personaje.edad=11;
delete personaje.serie;
console.log(personaje);