/**
 * {
 * url:
 * bucket: amazon S3
 * port: 80
 * }
 */
const configuracion ={
    url: 'https://holamundo.io',
}

function configurarAPIParametroObj({url}={url:'Por defencto'}){
    return `${url}`;
}

function configurarAPI(url,butcket=145,port=80){
    return `${url}/${butcket}:${port}`;
}

function configurarAPIParametro(url = 'https://holamundo.io'){
    return `${url}`;
}

console.log(configurarAPI('https://holamundo.io'))