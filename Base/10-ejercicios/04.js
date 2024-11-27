//funcion que recibe funcion de suma y paramatros. suma los parameptros y los muestra

function suma(fn,...rest){
    let resultado = rest.reduce((acc,el)=>{
        return acc+el;
    })
    fn(resultado);
}

suma(resultado=>{
    console.log(resultado);
},1,2,3,4)