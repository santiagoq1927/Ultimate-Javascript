function getProto(u){
    return Object.getPrototypeOf(u);
}
function Entidad(){}

Entidad.prototype.save = function(){
    console.log('guardando desde entidad');
}

function User(){}
//Metodo override
User.prototype.save = function(){
    console.log('guardando desde user');
}

Object.setPrototypeOf(User.prototype,Entidad.prototype);

const user = new User();
console.log(getProto(getProto(user)).save());