let promesa1 = param1 => new Promise((res,rej)=>{
    const b = 'Hola mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res,rej)=>{
    res(param2+', Hola Mundo');
});

let promesa3 = (param1,param2) => new Promise((res,rej)=>{
    res('chanchito feliz');
})

async function main(){
    try {
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const _ = await promesa2(b);
        promesa3(a,b);
    } catch (error) {
        console.log({error});
    }
}

main();