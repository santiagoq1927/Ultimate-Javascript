let elemento = document.createElement('p');
elemento.innerText = 'Elemento creado';

//append recibe textos y nodos.
document.body.append(elemento);
elemento.remove();
document.body.prepend(elemento);

let div = document.createElement('div');
div.innerText = 'Soy un texto';
document.body.append(div);

//elemento.replaceWith(div);
document.body.insertBefore(div,elemento);