//crear copia desde 0 sin usar ... ni Object.assign
let objeto ={id:1,name:'chanchito'}
function crearCopia(obj){
    let copiaObj = {};
    for(let elemento in obj){
        copiaObj[elemento]=obj[elemento];
    }
    return copiaObj;
}

let objeto2 = crearCopia(objeto);
console.log({objeto,objeto2});