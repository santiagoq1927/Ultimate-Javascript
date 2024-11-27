/**
 * Obtener usuarios pago
 * Ordenar de mayor a menor edad
 * Devolver el nombre del usuario
 * Crear una plantilla HTML
 * Imprimir en consola
 */
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Castor',plan:'free'},
    {edad:30,nombre:'Loro',plan:'premium'},
    {edad:37,nombre:'Camaron',plan:'free'},
    {edad:20,nombre:'Rinoceronte',plan:'gold'},
]

function obtenerUsuariosPagoReduce(arr){
    return arr.reduce((acc,el)=>{
        valor = el.plan;
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    },{})
}

function obtenerUsuariosPagoFilter(arr){
    return arr.filter(u=>u.plan!=='free');
}

function ordenar(arr){
    arr.sort((a,b)=>{
        if(a.edad<b.edad) return 1;
        if(a.edad>b.edad) return -1;
        return 0;
    })
}

function mostrarNombres(arr){
    return arr.map(u=>`<li>${u.nombre}</li>`);
}

function crearPlantilla(arr){
    return `
    <ul>
        ${arr.join(`
        `)}
    </ul>
    `;
}

let pago = obtenerUsuariosPagoFilter(usuarios);
pago.sort((a,b)=>{
    if(a.edad<b.edad) return 1;
    if(a.edad>b.edad) return -1;
    return 0;        
})
let nombres = mostrarNombres(pago);
let html = crearPlantilla(nombres);
console.log(nombres);
console.log(html);