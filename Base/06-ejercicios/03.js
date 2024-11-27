//Objetos similares si tiene mismas propiedades y valores returna true, si no false.

function similaresValores(obj1,obj2){
    let banderaSimilar=false;
    for(let elemento in obj1){
        (obj1[elemento]!==obj2[elemento]) ? banderaSimilar=false : banderaSimilar=true;
    }
    return banderaSimilar;
}

let resultado= similaresValores(
    {id:1,name:'Nico'},
    {id:1,name:'Nico'},
);

console.log(resultado);