//reciba una cadena y una funcion y ordene la cadena y la funcion muestra la cadena
function ordenar(texto,fn){
    let textoSeparado = texto.split('').sort().join('');
    // let textoJunto = textoSeparado.join('');
    // let textoJuntoCadena = textoJunto.split('');
    // textoJuntoCadena.sort();
    // textoJunto=textoJuntoCadena.join('');
    fn(textoSeparado);
}

function ordenarPro(texto,fn){
    let resultado = texto.toLowerCase().split('').filter(x=>x!==' ').sort().join('');
    fn(resultado);
}

ordenar('hola mundo',console.log);