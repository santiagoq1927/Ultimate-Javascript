let usuarios = [
    {id:1,activ:true},
    {id:2,activ:false},
    {id:3,activ:false},
]

let todosActivos = usuarios.every(u=>{
    console.log("Todos activos",u.id);
    return u.activ;
})

let usuarioActivo = usuarios.some(u=>{
    console.log(u.id);
    return u.activ;
})

console.log(usuarioActivo);