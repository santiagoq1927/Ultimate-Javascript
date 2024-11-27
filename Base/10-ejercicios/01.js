//Agregar propiedad a objeto con constructor y usando this
const obj ={
    nombre:'Chanchito',
};

function Extender(){
    this.login = ()=>{
        console.log(this.nombre,"Login")
    }
    this.logout = ()=>{
        console.log(this.nombre,"Logout")
    }
}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();