//elemento maypr y menor de un array
function menorMayor(arry){
    let elementos =[0,100]
    for(let i=0;i<arry.length;i++){
        if(arry[i]> elementos[0]){
            elementos[0]=arry[i];
        }
        if(arry[i]<elementos[1]){
            elementos[1]=arry[i];
        }
    }
    return elementos;
}

function refactorizadaMayorMenor(arrayNumeros){
    let mayor = arrayNumeros[0];
    let menor = arrayNumeros[0];
    for(let numero of arrayNumeros){
        menor = (menor < numero) ? menor : numero;
        mayor = (mayor > numero) ? mayor : numero; 
    }
    return [mayor,menor];
}

let elemtosMayorMenor = refactorizadaMayorMenor([17,34,156,322,78,12]);
console.log(elemtosMayorMenor);