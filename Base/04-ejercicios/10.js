// array de longitun n y que escriba los numero de 1 a n

function longitudN(longitud){
    let arregloN = [];
    for(let i=0; i<longitud;i++){
        arregloN[i]=i+1;
    }
    return arregloN;
}

let resultado = longitudN(8);
console.log(resultado);