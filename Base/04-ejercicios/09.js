// array de pares y retorna array de objetos

let pares =[
    [1,{name:'Chanchito'}],
    [2,{name:'Castor'}],
    [3,{name:'Cabellito de mar'}],
];

function arrayPares(pairs){
    let objetoAnimales = [];
    for(let indx in pairs){
        let elemento = pairs[indx];
        objetoAnimales[indx] = elemento[1];
        objetoAnimales[indx].id = elemento[0];
    }
    return objetoAnimales;
}

let arrayObjeto = arrayPares(pares);
console.log(arrayObjeto);