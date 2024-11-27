const saludo= "Hola Mundo!";

const despedida = new String("Chao mundo :(");
console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.includes("do"));
let nuevoSaludo = saludo.replace("Mundo","Santiago")
console.log(nuevoSaludo,saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0,4));