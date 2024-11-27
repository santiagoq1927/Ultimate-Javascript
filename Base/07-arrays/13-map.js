const usuarios = [
    {edad:17,nombre:'Chanchito'},
    {edad:35,nombre:'Castor'},
    {edad:25,nombre:'Loro'},
    {edad:28,nombre:'Camaron'},
];

const lista = usuarios
    .filter(u=> u.edad > 17)
    .map(u=> `<li>${u.nombre}</li>`);
    
const html = `<ol>${lista.join('')}</ol>`;

console.log(lista);
console.log(html);

const mapped = usuarios.map(u=>{
    return {
        ...u,
        mayor : u.edad > 17,
    }
});

console.log(mapped);