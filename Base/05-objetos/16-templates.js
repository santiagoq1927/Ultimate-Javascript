const saludo = "Hola mundo!\n Bienvenido a\t \"JavaScript\"";
console.log(saludo);

const nombre= 'Santiago';
const apellido= 'Quijano'
const nombreCompleto = nombre + ' ' + apellido;

function plantilla(nombre){
    return `Hola ${nombre}
    Bienvenido a "JavaSript"
    Saludos, ${nombre}
    `;
}

console.log(plantilla("Chanchito"));