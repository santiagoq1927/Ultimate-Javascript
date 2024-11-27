//devolver el resultado con valor absoluto
function paraAbsoluto(arr){
    let absoluto = [];
    for(let i =0;i<arr.length;i++){
        absoluto[i]=Math.abs(arr[i]);
    }
    return absoluto;
}

function paraAbs(arr){
    return arr.map(n=>Math.abs(n))
}

const ns = [1,-3,4,-10,65];
const absoluto = paraAbs(ns);
console.log(absoluto);