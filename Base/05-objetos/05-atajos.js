let obj = {};
let obj1 = new Object();

/**
 * new String(); "" o ''
 * new Array();  []
 * new Number(); 12
 * new Bollean; false true
 *  */

function Usuario(){
    this.name = 'Chanchito feliz';
}

let user = new Usuario();
console.log(user.constructor);