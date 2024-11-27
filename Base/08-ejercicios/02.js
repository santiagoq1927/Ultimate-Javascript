//agrupar en arrays por tipos de dato

const miArray =[
    "Hola",
    12,
    "Mundo",
    {},
    {id:12},
    ['Chanchito'],
];

function dividePorTipo(arr){
    return{
        strings: arr.filter(e => typeof e === "string"),
        numbers: arr.filter(e => typeof e === "number"),
        objects: arr.filter(e => typeof e === "object"),
    }
};

const nuevoArray=dividePorTipo(miArray);
console.log(nuevoArray);