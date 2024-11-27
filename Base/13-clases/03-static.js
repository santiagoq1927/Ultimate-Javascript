class Restaurant{
    constructor(name){
        this.name=name;
    }

    getTimetable(){
        console.log('Horario restaurante');
    }

    static getRestaurante(id){
        return new Restaurant('BBQ');
    }
}

const restaurante = Restaurant.getRestaurante(12);
console.log(restaurante);