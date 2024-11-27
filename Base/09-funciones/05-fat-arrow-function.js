function suma(a,b){
    return a+b;
}

//fat arrow function no tiene arguments
const sumaArgumnets = (a,b) =>{
    return Array.from(arguments).reduce((acc,el)=>acc+el)
    // let resultado = 0;
    // for(let valor of arguments){
    //     resultado += valor;
    // }
    // return resultado;
}

let resultado = sumaArgumnets(2,3,4,5);
console.log(resultado);