// creuar usuario con nombre y id random
function Usuario(name){
    this.name = name;
    this.id = Math.random();
}

let user = new Usuario("Santiago");
let user2 = new Usuario("Chanchito");
console.log(user,user2);

