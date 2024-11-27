//funcion q reciba funcion y el resto de parametros, cuando se llama la funcion 
//se debe pesar la paramatros a la funcion que se pasa por parametro

function callback(fn,...rest){
    fn(...rest);
}

function log(...args){
    console.log(args);
}

callback(log,1,2,3,4);