//agrupos por propiedad
const usuarios =[
    {edad:17,nombre:'Chanchito',plan:'free'},
    {edad:25,nombre:'Castor',plan:'premium'},
    {edad:30,nombre:'Lore',plan:'premium'},
    {edad:37,nombre:'Camaron',plan:'free'},
]

function gruopBy(arr,prop){
    return arr.reduce((acc,el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    },{})
}

const grupo =  gruopBy(usuarios,'plan');
console.log(grupo);