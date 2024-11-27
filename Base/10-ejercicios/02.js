// funcion que retorne objeto y que agregue propiedades
const obj = {
    nombre: 'Castor',
};

function extender(usuario){
    usuario.login = ()=>{
        console.log(usuario.nombre,"Login")
    }
    usuario.logout = ()=>{
        console.log(usuario.nombre,"Logout")
    }
    return usuario;
}

function extenderPro(usuario){
    const metodos={
        login(){
            console.log(this.nombre,"Login")
        },
        logout(){
            console.log(this.nombre,"Logout")
        },
    };
    return Object.assign(usuario,metodos)
}

const usuario = extenderPro(obj);
console.log(usuario);
obj.login();