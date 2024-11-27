class Entidad{
    constructor(id){
        this.id=id;
        this.created_at= new Date();
    }
    save(){
        console.log('guardando en entidad...')
    }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name=name;
    }
    save(){
        super.save();
        console.log('guardando en usuario...')
    }
}

const usuario = new User('Chanchito');
console.log(usuario);
usuario.save();