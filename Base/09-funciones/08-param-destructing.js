const confguracion = {
    url: 'https://www.holamundo.io',
    direccion: {
        calle: 'avenida simpre viva',
        numero: 80,
    }
}

const confguracionArray = [
    'https://www.holamundo.io',
    145,
    80,
]

function webServer({url, direccion: { calle }}){
    //const {url} = config;
    console.log(calle);
    return url;
}

function webServerObjeto(confguracion){
    const {url, ...rest} = confguracion;
    console.log(rest);
    return url;
}

function webServerArray([url,bucket, port]){
    return url;
}

console.log(webServerObjeto(confguracion));