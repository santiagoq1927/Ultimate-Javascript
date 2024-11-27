function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El parametro no es array')
    }
    return arr.reduce((acc,el)=>{
        if(typeof el !=='number' || Number.isNaN(el)){
            throw new Error(`Elemento ${el} no es numero`);
        }
       return acc+el
    });
}

try{
    console.log(sumaTodo([1,2,3,4]));
}catch(e){
    console.log(e.message)
}

console.log('desps del catch');