//Usuario con mayor edad
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Castor',plan:'free'},
    {edad:30,nombre:'Lore',plan:'premium'},
    {edad:37,nombre:'Camaron',plan:'free'},
]

function obtenerMayoresEdad(arr){
    return arr.filter(u=>u.edad>17);
}

function obtenrMayorReducce(arr){
    let usuarioMayor =arr[0];
    let mayor = arr.reduce((acc,el)=>{
        if(usuarioMayor.edad < el.edad){
            usuarioMayor = el;
        }
    },0)
    return usuarioMayor;
}

function obtenerMayor(arr){
    let mayor =arr[0];
    for(let usuario of arr){
        if(mayor.edad < usuario.edad){
            mayor = usuario;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);