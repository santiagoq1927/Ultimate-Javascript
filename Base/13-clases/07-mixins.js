const Entidad={
    save(){
        console.log('guardando en entidad...')
    }
}

const Actualizar={
    update(){
        console.log('actaulizando en entidad...')
    }
}

class User{ 
    constructor(name){
        this.name=name;
    }
    save(){
        console.log('guardando en usuario...')
    }
}

const nuevoPrototipo = Object.assign({},Entidad,Actualizar);
Object.setPrototypeOf(User.prototype,nuevoPrototipo);
const usuario = new User('Chanchito');
console.log(usuario);
usuario.save();