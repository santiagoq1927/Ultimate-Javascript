//numero de premium y maypres de edad
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Castor',plan:'free'},
    {edad:30,nombre:'Lore',plan:'premium'},
    {edad:37,nombre:'Camaron',plan:'free'},
]

function cuantosPremium(usrs){
    let usuariosPremium = usrs.filter(u=>u.plan === 'premium');
    return usuariosPremium.length;
}
function usuariosPremium(usrs){
    return usrs.reduce((acc,el) => 
        {
            if(el.plan !== 'free'){
            return acc +1;
        }
        return acc;
    },0)
}
function cuantosMayores(usrs){
    let usuariosMayores = usrs.filter(u=>u.edad > 17);
    return usuariosMayores.length;
}
console.log(usuariosPremium(usuarios), cuantosMayores(usuarios));