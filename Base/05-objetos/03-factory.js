function crearUsuario(name,email){
    return{
        email,
        name,
        activo : true,
        recuperarClave : function(){
            console.log("Recuperando clave");
        },
    }
}

let user1 = crearUsuario('Santiago','sato@gmail.com');
let user2 = crearUsuario('Chanchito','chanchito@gmail.com');
console.log(user1, user2);