// function User(name){
//     this.name=name,
//     this.instancia=function(){
//     }
// }

// User.prototype.login=function(){
//     console.log('Login...')
// }

class User{
    constructor(name){
        this.name = name
        this.instancia = function(){}
    }

    activo=true;
    logout=()=>{
        console.log('logout...');
    }
    login(){
        console.log('login...');
    }
}

const usuario = new User('Chanchito');
console.log(usuario);