function mixin(Ctr,...args){
    Object.assign(Ctr.prototype, ...args);
}
let vuela ={
    vuela(){
        console.log("Volando...");
    }
}
let nada ={
    nada(){
        console.log("Nadando...");
    }
}

let bano ={
    bano(){
        console.log("Bañando...");
    }
}

let corre ={
    corre(){
        console.log("Corriendo...");
    }
}

//vuela, nada, camina, va al baño
function Pato(){
    this.name = 'Patito';
}
mixin(Pato, nada, vuela, bano);
console.log(Pato.prototype,new Pato());

//camina, nada y va al baño
function Perro(){}
mixin(Perro,nada, corre, bano);
console.log(Perro.prototype,new Perro());

//nada y va al baño
function Pez(){}
mixin(Pez, nada, bano);
console.log(Pez.prototype,new Pez());

//vuela pero no nada, no camina ni va al baño
function Avion(){}

mixin(Avion, vuela);
console.log(Avion.prototype,new Avion());