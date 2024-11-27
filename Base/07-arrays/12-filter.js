const usuarios = [
    {edad:17,nombre:'Chanchito'},
    {edad:35,nombre:'Castor'},
    {edad:25,nombre:'Loro'},
    {edad:28,nombre:'Camaron'},
];

const mayores = usuarios.filter(u=>u.edad>17);
console.log(mayores);