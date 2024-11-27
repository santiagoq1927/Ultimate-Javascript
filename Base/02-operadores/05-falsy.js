//short circuit

// falso 
// falso, 0, '', null, undefined, NaN -> falsy

let nombre = 'Chanchito';
let username=nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log("Funcion 1");
    return false;
}

function fn2(){
    console.log("Funcion 2");
    return true;
}

let x = fn1() && fn2();