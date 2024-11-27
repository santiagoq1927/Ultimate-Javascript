let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type','text');
let btn = document.createElement('button');
btn.innerText = 'Envar';
form.append(input);
form.append(btn);
document.body.append(form);

form.onmouseenter = event =>{
    console.log('entra mouse en formulario',event);
}

form.onmouseleave = event =>{
    console.log('sale mouse del formulario',event);
}

input.onfocus = event =>{
    console.log("input focus, hizo clic en input");
}

input.onblur = event =>{
    console.log("input perdio el foco. salio del input");
}

input.onchange = event =>{
    console.log('valor cambia', event.target.value);
}

btn.onclick = event =>{
    event.preventDefault();
    console.log('boton clickeado');
}