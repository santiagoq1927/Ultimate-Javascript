const numeros = [1,2,3,4,5];

const suma = numeros.reduce((acc,el)=>{
    return acc + el;
},0);

console.log(suma);

const anidado = [[1,2],3,[4,5]];
const plano = anidado.reduce((acc,el)=>acc.concat(el), []);
console.log(plano);