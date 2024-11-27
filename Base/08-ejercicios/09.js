/**
 * Unificar la estructura del los array 
 * fusionar los array
 * ordenar por edad
 * crear plantilla html
 * <li>Nombre: nombre, Edad: edad</li>
 * Imprimir en consola
 */
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Castor',plan:'free'},
    {edad:30,nombre:'Loro',plan:'premium'},
    {edad:37,nombre:'Camaron',plan:'free'},
];

const users =[
    {age:17,name:'Rinoceronte',membership:'free'},
    {age:25,name:'Tucan',membership:'free'},
    {age:30,name:'Pulpo',membership:'premium'},
    {age:37,name:'Mapache',membership:'gold'},
];

const userEspanol = users.map(u=>({
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
}));

// const todos = [...usuarios, ...userEspanol]
const usuariosUnidos = usuarios.concat(userEspanol);
usuariosUnidos.sort((a,b)=>{
    if(a.edad<b.edad) return 1
    if(a.edad>b.edad) return -1
    return 0
});

const plantilla = usuariosUnidos.map(u=>`<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`)
const html = `
    <ul>
        ${plantilla.join(`
        `)}
    </ul>
`
console.log(html);