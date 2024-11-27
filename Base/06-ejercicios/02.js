// crear usuario con nombre y id random - factory function
function crearUsuario(name){
    return{
        id : Math.random(),
        name,
    }
}

let user = crearUsuario("Santiago");
let user1 = crearUsuario("Chanchito feliz");
console.log(user,user1);
