//name queda privado al crearlo con let.
// function User(a){
//     let name = a;
//     this.getName = function(){return name;}
// }
class User{
    #name;
    constructor(name){
        this.#name = name;
    }
    #logger(){}
    getName(){
        this.#logger();
        return this.#name;
    }
}

const usuario = new User('Chanchito');
console.log(usuario);