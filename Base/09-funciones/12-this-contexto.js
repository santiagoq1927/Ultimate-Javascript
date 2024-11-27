const usuarios = {
    nombre: 'Chanchito',
    ciudadanias: ['Colombia', 'Turquia','India'],
    mostrarCiudadania: function(){
        this.ciudadanias.forEach((ciudadania)=>{
            console.log(this.nombre,ciudadania);    
        });
    }
}

usuarios.mostrarCiudadania();