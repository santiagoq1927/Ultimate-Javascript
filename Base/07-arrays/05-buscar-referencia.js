const usuarios = [
    {id:1,name:'Chanchito'},
    {id:1,name:'Loro'},
    {id:2,name:'Castor'},
]

const resultado = usuarios.find(function(usuario){
    return usuario.id===1;
});

console.log(resultado);