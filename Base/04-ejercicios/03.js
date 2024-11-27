// obetner elemento de un array recibiendo como parametro el indice, debe er mayor q cero y el 
// elemento debe exisitir
function obtenerElemento(arry,indx){
    if(indx<arry.length || indx>=0){
        return arry[indx]
    }else{
        return "Indice no valido";
    }
}

let elemento = obtenerElemento([1,2,3,4],2);
console.log(elemento);