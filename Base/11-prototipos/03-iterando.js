function User(){
    this.name='Chanchito';
}
User.prototype.login = function(){
    console.log('Inciando sesion', this.name);
}

let user = new User();

for(let prop in user)
    console.log(prop);

console.log(Object.keys(user));