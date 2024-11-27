class Restaurants{
    #timetable;
    constructor(name){
        this.name=name;
    }

    get timetable(){
        return this.#timetable;
    };
    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)){
            throw new Error('Facha no valida');
        }
        this.#timetable=date;
    };
}

const restaurante = new Restaurants('BBQ');
restaurante.timetable = '1 dec 1978';
console.log(restaurante);
