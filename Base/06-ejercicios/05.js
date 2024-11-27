//Propeidad existente
let objeto = {
    id:1,
    name:'Chanchito',
    login: function(){},
}

let propeidad = 'name';

function tienePropiedad(obj,prop){
    for(let elemento in obj){
        console.log(elemento, prop);
        if(elemento===prop){
            return true;
        }
    }
    return false;
}

function tieneProp(obj,prop){
    let propiedades = Object.keys(obj);
    for(let elemento of propiedades){
        console.log(elemento, prop);
        if(elemento==prop){
            return true;
        }    
    }
    return false;
}

console.log(tienePropiedad(objeto,propeidad));