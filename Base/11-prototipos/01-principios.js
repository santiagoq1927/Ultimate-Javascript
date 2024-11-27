//Encapsulacion
// const user ={
//     nombre:'Chanchito',
//     apellido:'Feliz',
//     getNombreCompleto(){
//         return [this.nombre, this.apellido].join(' ');
//     }
// }
// console.log(user.getNombreCompleto());

//abstraccion
const user = new User();
user.password = 'chanchito feliz';
user.save();

//herencia
// guardarPadre() >> hereda este metodo a user, restuarente y Motocicleta
// User -> id, nombre, guardar()
// Restaurante -> id, nombre, guardar()
// Motocicleta -> id, nombre, guardar()

//polimorfismo
function validarEntidad(entidad){
    //user, rasturabte o motocicleta debe implimetar el metodo save, 3 acciones distintas
    entidad.save();
}