let elemento = document.createElement('p');
elemento.innerText='Elemento creado';
document.body.append(elemento);

//elemento.innerText="<ul><li>Hola Mundo</li></ul>";
//elemento.innerHTML="<ul><li>Hola Mundo</li></ul>";
elemento.style='background-color: red; font-weight: bold';
elemento.className='parrafo';
elemento.id='mi-parrafo';
//agregar propiadad
elemento.setAttribute('miparrafo','mi parrafo');
console.log(elemento.getAttribute('miparrafo'));
elemento.hasAttribute('miparrafo');
 