//Numero mayor
function numeroMayor(a,b){
    if(a>b){
        console.log("El numero ", a , " es mayor");
    }else{
        console.log("El numero ", b , " es mayor");
    }
}

function numeroMayorRestructurado(a,b){
    return (a>b) ? a:b;
}

let mayor = numeroMayorRestructurado(10,21);
console.log(mayor);