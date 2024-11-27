//agregar propiedad al objeto
let objeto = {
    name:'Chanchito',
};

function agregarId(obj){
    let randomId = Math.random();
    obj.id = randomId;
    return obj;
}

agregarId(objeto);
console.log(objeto);