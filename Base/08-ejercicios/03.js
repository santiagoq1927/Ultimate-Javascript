//omitir los free
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'premium'},
    {edad:27,nombre:'Castor',plan:'free'},
    {edad:30,nombre:'Lore',plan:'free'},
    {edad:37,nombre:'Camaron',plan:'gold'},
]

function getPaidUser(usrs){
    return usrs.filter(u=>u.plan !== 'free');
}

console.log(getPaidUser(usuarios));