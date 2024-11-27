function createDragglable(){
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastable';
    span.draggable = true;
    
    return span;
}

function createDropArea(){
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = event =>{
        event.target.style.background = 'yellow';
    }
    dropArea.ondragleave = event =>{
        event.target.style.background = '';
    }
    dropArea.ondragover = event => event.preventDefault();
    dropArea.ondrop = event =>{
        event.target.appendChild(document.getElementById('hola-mundo'));
    }
    return dropArea;    
}

let draggable = createDragglable();
let dropArea1 = createDropArea();
let dropArea2 = createDropArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
