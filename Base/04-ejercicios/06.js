//cantidad de numero postivos en un array
function numerosPositivos(array){
    let contador = 0;
    for(let numeros of array){
        (numeros >= 0) ? contador ++ : numeros 
    }
    return contador;
}

let cantidadPositivos = numerosPositivos([1,5,-6,8,-10,-15,9,7,0,56,-14,-78]);
console.log(cantidadPositivos);