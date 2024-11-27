let numeros = [10,15,-3];
numeros.sort();
numeros.reverse();
console.log(numeros);


let letras = ['w','e','o'];
letras.sort();
//letras.reverse();
console.log(letras);

let letrasMayuscula = ['W','e','o'];
letrasMayuscula.sort((a,b)=>{
    /**
     * a antes b > -1
     * b antes a > 1
     * iguales > 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    if(alower < blower){
        return -1
    }else if(blower > alower){
        return 1
    }
    return 0;
});
//letras.reverse();
console.log(letrasMayuscula);

let usuarios = [
    {edad:25,nombre:'Chanchito'},
    {edad:15,nombre:'Castor'},
    {edad:20,nombre:'Loro'},
];

usuarios.sort((a,b)=>{
    if(a.edad < b.edad) return -1;
    if(a.edad > b.edad) return 1;
    return 0;
});
console.log(usuarios);
