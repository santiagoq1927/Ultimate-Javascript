const user = {id:1};

user.name = 'Santiago';
user.guardar = function(){
    console.log('Guardando',user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({id:10});
const user1 = Object.seal({id:10});
user1.name = 'Santi';
user1.id = 20;
console.log(user1);