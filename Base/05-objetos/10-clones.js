let punto ={
    x:10,
    y:15,
};

//Object.assign(punto,{z:20});
let referencia = Object.assign(punto,{z:20, x:50});
let clonePunto = Object.assign({},punto,{z:20, x:50});
//console.log(punto,clonePunto); 
//console.log(referencia);    

let copiaPunto = Object.assign({},punto);
console.log(punto,copiaPunto);

let copia3 = {...punto};
console.log(copia3,punto);