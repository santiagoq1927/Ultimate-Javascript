//Cuales propiedades son metodos

let obejto ={
    id:1,
    name:'Chanchito',
    login:function(){},
    logout:function(){},
}

function cualesEsMetodo(obj){
    for(let elemento in obj){
        if(typeof obj[elemento]==='function'){
            console.log(elemento);
        }
    }
}
cualesEsMetodo(obejto);