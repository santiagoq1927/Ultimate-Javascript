function Usuario(){
    this.name = 'Nicolas';
    let log = function(){
        console.log("Loggin...");
    }
    this.guardar = function(){
        log();
        console.log("Guardando...");
    }
}
const usuario = new Usuario();
usuario.log = function(){
    console.log('Lala');
}

usuario.guardar();