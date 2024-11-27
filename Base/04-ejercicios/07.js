//calculadora con impuesto
function calcularImpuesto(precio,impuesto){
    precio += precio*impuesto;
    return precio;
}

let precioCalculado = calcularImpuesto(100,0.15);
console.log(precioCalculado);