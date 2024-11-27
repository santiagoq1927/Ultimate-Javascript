const suma = (a,b, ...rest) =>{
    console.log(rest);
}


const logMns = (desc, ...msgs)=>{
    for(let msg of msgs){
        console.log(desc, msg);
    }
}

logMns('Servidor:', 'Error 1', 'Error 2', 'Error 3');

let mensajes = ['Servidor:', 'Error 1', 'Error 2', 'Error 3'];
logMns('Cliente movil:', ...mensajes);