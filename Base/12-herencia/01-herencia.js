function User(){
    this.name='Chanchito';
}

function Product(){
    this.name='Producto';
}

function Entidad(){}

Entidad.prototype.save = function(){
    console.log("Guardando...", this.name);
}

Entidad.prototype.validate = function(){
    console.log("Validando...", this.name);
}

//Formas de hacer herencia

// User.prototype=Entidad.prototype; //forma 1
// User.prototype.constructor = User; //forma 1
// User.prototype = Object.create(Entidad.prototype); //forma 2
// User.prototype.constructor = User; //forma 2
Object.setPrototypeOf(User.prototype,Entidad.prototype);
Object.setPrototypeOf(Product.prototype,Entidad.prototype);

const user = new User();
console.log(user); 