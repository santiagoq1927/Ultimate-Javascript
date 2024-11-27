function saludar(...rest){
    console.log(this,rest);
}

const usuarios = {
    nombre: 'Chanchito',
    ciudadanias: ['Colombia', 'Turquia','India'],
    mostrarCiudadania: function(){
        this.ciudadanias.forEach( function (ciudadania){
            console.log(this.nombre,ciudadania);    
        }.bind(this));
    }
}

usuarios.mostrarCiudadania();

saludar.call({propiedad:'hola mundo'},1,5);
saludar.apply({propiedad:'hola mundo'},[1,5]);
saludar.bind({propiedad:'hola mundo'}) (3,8);