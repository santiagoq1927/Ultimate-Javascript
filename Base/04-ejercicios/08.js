//array de objetos que devuelva pares
let arrayAnimales = [{
        id : 1,
        nombre : 'Chanchito'
    },{
        id : 2,
        nombre : 'Castor'
    },{
        id : 3,
        nombre : 'Caballito de mar'
}];

function paresArray(){
    let arrayAnimales = [{
        id : 1,
        nombre : 'Chanchito'
    },{
        id : 2,
        nombre : 'Castor'
    },{
        id : 3,
        nombre : 'Caballito de mar'
    }];
    let par =[];
    for(let caracteristica in arrayAnimales){
        let elemento = arrayAnimales[caracteristica];
        par[caracteristica] = [elemento.id,elemento];
        console.log(par[caracteristica]);
    }
}

paresArray();