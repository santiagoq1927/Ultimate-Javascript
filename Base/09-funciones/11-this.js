//en objeto: this hace referencia a un obj.
//en funcion: this hace referencia a window
// new hacer referencia al obj que se creara

const user = {
    name: 'Chachito',
    login: function (){
        console.log(this);
    }
}

user.logout = function logout(){
    console.log(this);
}

user.logout();

function log(){
    console.log(this);
}

function Log(mensaje){
    this.mensaje=mensaje;
    console.log(this);
}

const l = new Log('Hola Mundo');